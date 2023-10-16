<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h2>WEATHER</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Location</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                    </tr>
                    <xsl:for-each select="weatherData/Location">
                        <tr>
                            <td><xsl:value-of select="place"/></td>
                            <td><xsl:value-of select="temperature"/></td>
                            <td><xsl:value-of select="humidity"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>