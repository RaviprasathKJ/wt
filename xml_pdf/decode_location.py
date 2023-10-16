from lxml import etree
from io import StringIO
from xhtml2pdf import pisa

xml_file_path = 'location.xml'
xslt_file_path = 'location.xslt'

with open(xslt_file_path,'rb') as xslt_file:
    xslt_root = etree.XML(xslt_file.read())

dom = etree.parse(xml_file_path)
xslt = etree.XSLT(xslt_root)

result_tree =xslt(dom)

html = "location.html"
with open(html ,'wb') as f:
    f.write(result_tree)

pdf = "location.pdf"
with open(html,'rb') as f:
    pisa_status = pisa.CreatePDF(f,open(pdf,"wb"))

if not pisa_status.err:
    print(f"PDF file '{pdf}' is generated ")
else:
    print(f'error {pisa_status.err}')