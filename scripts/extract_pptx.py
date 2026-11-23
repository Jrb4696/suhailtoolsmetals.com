import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text(pptx_path):
    text_runs = []
    try:
        with zipfile.ZipFile(pptx_path, 'r') as zip_ref:
            # Find all slide files
            slide_files = [f for f in zip_ref.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')]
            
            for slide_file in sorted(slide_files):
                xml_content = zip_ref.read(slide_file)
                tree = ET.fromstring(xml_content)
                # The text is inside <a:t> elements
                namespaces = {'a': 'http://schemas.openxmlformats.org/drawingml/2006/main'}
                for node in tree.iterfind('.//a:t', namespaces):
                    if node.text:
                        text_runs.append(node.text)
                text_runs.append("\n--- SLIDE BREAK ---\n")
    except Exception as e:
        print(f"Error: {e}")
    
    return "".join(text_runs)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        text = extract_text(sys.argv[1])
        print(text)
    else:
        print("Usage: python extract_pptx.py <path_to_pptx>")
