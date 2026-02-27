import glob
import os

files_updated = 0
for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "images/logo_gorianka.png" not in content and "</head>" in content:
        content = content.replace("</head>", '    <link rel="icon" type="image/png" href="images/logo_gorianka.png">\n</head>')
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        files_updated += 1

print(f"Updated {files_updated} html files.")
