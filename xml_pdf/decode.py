from lxml import etree
from io import StringIO
from xhtml2pdf import pisa

# Read the XML and XSLT files
xml_file_path = 'playlist.xml'
xslt_file_path = 'playlist.xslt'

# Parse the XSLT stylesheet
with open(xslt_file_path, 'rb') as xslt_file:
    xslt_root = etree.XML(xslt_file.read())

# Parse the XML file
dom = etree.parse(xml_file_path)
xslt = etree.XSLT(xslt_root)

# Perform the transformation
result_tree = xslt(dom)

# Save the transformation result to an HTML file
html_output = "playlist.html"
with open(html_output, 'wb') as f:
    f.write(result_tree)

# Convert the HTML file to a PDF file
pdf_output = "playlist.pdf"
with open(html_output, "rb") as f:
    pisa_status = pisa.CreatePDF(f, open(pdf_output, "wb"))

if not pisa_status.err:
    print(f"PDF file '{pdf_output}' generated successfully.")
else:
    print(f"Error generating PDF file: {pisa_status.err}")
