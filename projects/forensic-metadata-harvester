<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Forensic Metadata Harvester - Deep metadata extraction tool for digital forensics">
    <title>Forensic Metadata Harvester | David Dylag</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
    <style>
        /* Project-specific styles */
        .project-hero {
            background: linear-gradient(135deg, #0a0e1a 0%, #141925 100%);
            padding: 100px 0 60px;
            position: relative;
            overflow: hidden;
        }
        
        .project-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
            animation: pulse 10s ease-in-out infinite;
        }
        
        .demo-section {
            background: #0f1420;
            padding: 60px 0;
        }
        
        .demo-container {
            background: #141925;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(0, 212, 255, 0.1);
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .feature-card {
            background: #141925;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid rgba(0, 212, 255, 0.1);
            transition: all 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
            border-color: #00d4ff;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }
        
        .feature-card i {
            font-size: 2.5rem;
            color: #00d4ff;
            margin-bottom: 20px;
        }
        
        .code-example {
            background: #1a1f2e;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            overflow-x: auto;
            border: 1px solid rgba(0, 212, 255, 0.1);
        }
        
        .metadata-output {
            background: #0a0e1a;
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 8px;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            color: #00ff88;
            margin: 20px 0;
            max-height: 400px;
            overflow-y: auto;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 20px 0;
        }
        
        .tech-badge {
            background: rgba(0, 212, 255, 0.1);
            color: #00d4ff;
            padding: 8px 20px;
            border-radius: 20px;
            border: 1px solid #00d4ff;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .tech-badge:hover {
            background: #00d4ff;
            color: #0a0e1a;
            transform: translateY(-2px);
        }
        
        .screenshot-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin: 40px 0;
        }
        
        .screenshot {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        
        .screenshot:hover {
            transform: scale(1.02);
        }
        
        .screenshot img {
            width: 100%;
            height: auto;
        }
        
        .back-button {
            margin-bottom: 30px;
        }
        
        .breadcrumb {
            color: #a8b2c7;
            margin-bottom: 40px;
            font-size: 0.9rem;
        }
        
        .breadcrumb a {
            color: #00d4ff;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .breadcrumb a:hover {
            color: #4dd9ff;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="/">
                    <span class="logo-highlight">D</span>avid <span class="logo-highlight">D</span>ylag
                </a>
            </div>
            <nav class="nav">
                <ul>
                    <li><a href="/#about" class="nav-link">About</a></li>
                    <li><a href="/#projects" class="nav-link">Projects</a></li>
                    <li><a href="/#skills" class="nav-link">Skills</a></li>
                    <li><a href="/#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Project Hero -->
    <section class="project-hero">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Home</a> / <a href="/#projects">Projects</a> / Forensic Metadata Harvester
            </div>
            <a href="/#projects" class="btn btn-secondary back-button">
                <i class="fas fa-arrow-left"></i> Back to Projects
            </a>
            <h1 class="animate-fade-in">Forensic Metadata Harvester</h1>
            <p class="project-subtitle animate-fade-in">Deep metadata extraction tool for digital forensics and OSINT investigations</p>
            <div class="project-links animate-fade-in">
                <a href="https://github.com/cipherbite/forensic-metadata-harvester" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <a href="#demo" class="btn btn-outline">
                    <i class="fas fa-play"></i> See Demo
                </a>
            </div>
        </div>
    </section>

    <!-- Project Overview -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Project Overview</h2>
            <div class="project-overview">
                <p>The Forensic Metadata Harvester is a comprehensive Python tool designed for deep metadata extraction from various file types. Unlike basic EXIF readers, this tool digs deeper into file structures to uncover hidden information, edit histories, embedded objects, and forensic artifacts that can be crucial in investigations.</p>
                
                <p>Built with cybersecurity professionals and digital forensics investigators in mind, it provides detailed insights into files that might contain evidence or hidden information. The tool supports multiple file formats including images (JPEG, PNG, TIFF), documents (PDF, DOCX, XLSX), and multimedia files.</p>

                <h3>Key Features</h3>
                <div class="feature-grid">
                    <div class="feature-card">
                        <i class="fas fa-search-plus"></i>
                        <h4>Deep Metadata Extraction</h4>
                        <p>Goes beyond basic EXIF data to extract embedded thumbnails, color profiles, maker notes, and GPS coordinates</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-history"></i>
                        <h4>Document History Analysis</h4>
                        <p>Reveals revision history, tracked changes, comments, and previous authors in office documents</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-file-pdf"></i>
                        <h4>PDF Deep Analysis</h4>
                        <p>Extracts JavaScript, embedded files, form data, and reveals hidden layers in PDF documents</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-fingerprint"></i>
                        <h4>Digital Fingerprinting</h4>
                        <p>Identifies software used to create/edit files, timestamps, and unique identifiers</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-database"></i>
                        <h4>Structured Output</h4>
                        <p>Exports findings in JSON, CSV, or detailed HTML reports for further analysis</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-terminal"></i>
                        <h4>CLI & API Interface</h4>
                        <p>Command-line tool for quick analysis and Python API for integration into larger workflows</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technical Details -->
    <section class="section section-dark">
        <div class="container">
            <h2 class="section-title">Technical Implementation</h2>
            
            <h3>Technology Stack</h3>
            <div class="tech-stack">
                <span class="tech-badge">Python 3.8+</span>
                <span class="tech-badge">ExifRead</span>
                <span class="tech-badge">PyPDF2</span>
                <span class="tech-badge">python-docx</span>
                <span class="tech-badge">Pillow (PIL)</span>
                <span class="tech-badge">python-magic</span>
                <span class="tech-badge">Beautiful Soup</span>
                <span class="tech-badge">pikepdf</span>
            </div>

            <h3>Core Components</h3>
            <div class="code-example">
                <pre><code class="language-python">
# Example: Extracting deep EXIF data from images
from forensic_harvester import ImageAnalyzer

analyzer = ImageAnalyzer()
metadata = analyzer.extract_all_metadata('suspect_image.jpg')

# Extract GPS coordinates if present
if metadata.get('gps_info'):
    lat, lon = metadata['gps_info']['coordinates']
    print(f"Photo taken at: {lat}, {lon}")
    
# Check for image manipulation
if metadata.get('software_history'):
    print("Editing software detected:")
    for software in metadata['software_history']:
        print(f"  - {software['name']} (v{software['version']})")
                </code></pre>
            </div>

            <h3>Advanced Features Implementation</h3>
            <p>The tool implements several advanced techniques for metadata extraction:</p>
            
            <h4>1. Steganography Detection</h4>
            <div class="code-example">
                <pre><code class="language-python">
# Basic LSB steganography detection
def detect_lsb_steganography(image_path):
    img = Image.open(image_path)
    pixels = img.load()
    
    # Analyze LSB distribution
    lsb_values = []
    for i in range(img.width):
        for j in range(img.height):
            pixel = pixels[i, j]
            lsb_values.append(pixel[0] & 1)  # Red channel LSB
    
    # Statistical analysis for anomalies
    return analyze_distribution(lsb_values)
                </code></pre>
            </div>

            <h4>2. PDF JavaScript Extraction</h4>
            <div class="code-example">
                <pre><code class="language-python">
# Extract embedded JavaScript from PDFs
def extract_pdf_javascript(pdf_path):
    pdf = pikepdf.open(pdf_path)
    scripts = []
    
    for page in pdf.pages:
        if '/JS' in page:
            scripts.append(page['/JS'])
        if '/JavaScript' in page:
            scripts.append(page['/JavaScript'])
    
    return scripts
                </code></pre>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="demo" class="demo-section">
        <div class="container">
            <h2 class="section-title">Live Demo</h2>
            <div class="demo-container">
                <h3>Sample Output - Image Analysis</h3>
                <div class="metadata-output">
<pre>
[*] Analyzing file: corporate_photo.jpg
[*] File Type: JPEG Image
[*] File Size: 2.34 MB

[+] Basic Metadata:
    - Dimensions: 3024 x 4032
    - Color Space: sRGB
    - Bit Depth: 24
    - Creation Date: 2024-03-15 14:32:18

[+] EXIF Data:
    - Camera Make: Apple
    - Camera Model: iPhone 13 Pro
    - Lens Model: iPhone 13 Pro back triple camera
    - Focal Length: 26mm
    - Aperture: f/1.5
    - ISO: 80
    - Shutter Speed: 1/120s

[+] GPS Information:
    - Latitude: 52.5200° N
    - Longitude: 13.4050° E
    - Altitude: 34m
    - Location: Berlin, Germany

[+] Hidden Data:
    - Thumbnail: 160x120 JPEG (embedded)
    - XMP Metadata: Found (Adobe edits detected)
    - IPTC Tags: 12 tags found
    - Maker Notes: Apple iOS specific data

[!] Suspicious Findings:
    - Multiple software edits detected
    - Timestamp inconsistencies found
    - EXIF orientation manipulated
    - Possible content-aware fill detected

[+] Software History:
    1. Apple iOS 15.3.1 (Original)
    2. Adobe Photoshop 2023 (24.1.1)
    3. ExifTool 12.42 (Metadata modified)

[*] Analysis complete. Full report saved to: report_20240619_143521.json
</pre>
                </div>

                <h3>Sample Output - PDF Analysis</h3>
                <div class="metadata-output">
<pre>
[*] Analyzing file: confidential_document.pdf
[*] File Type: PDF Document
[*] File Size: 456 KB

[+] Document Properties:
    - Title: Q4 Financial Report
    - Author: John Doe
    - Creator: Microsoft Word 2019
    - Producer: Adobe PDF Library 15.0
    - Creation Date: 2024-01-10 09:15:32
    - Modification Date: 2024-01-12 16:42:11

[+] Document Structure:
    - Pages: 12
    - Encrypted: No
    - Forms: Yes (3 form fields detected)
    - JavaScript: Yes (2 scripts found)
    - Embedded Files: 1 Excel spreadsheet

[!] Hidden Content Detected:
    - Hidden layers: 2 layers found
    - Deleted text recoverable: Yes
    - Previous revisions: 3 versions embedded
    - Comments: 7 (4 deleted but recoverable)

[+] Revision History:
    Version 1: 2024-01-10 - John Doe
    Version 2: 2024-01-11 - Jane Smith (Major edits)
    Version 3: 2024-01-12 - Mike Johnson (Final review)

[!] Security Concerns:
    - JavaScript performs network requests
    - Form submission URL: http://suspicious-site.com/data
    - Embedded Excel contains macros

[*] Extracted embedded files to: ./extracted/
[*] Full forensic report: report_pdf_20240619_143645.html
</pre>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Real-World Applications</h2>
            <div class="use-cases">
                <h3>Digital Forensics</h3>
                <p>Essential for investigators analyzing digital evidence, recovering deleted information, and establishing timelines of file modifications.</p>
                
                <h3>OSINT Investigations</h3>
                <p>Extract location data, identify individuals through camera serial numbers, and uncover relationships between documents.</p>
                
                <h3>Incident Response</h3>
                <p>Quickly analyze suspicious files during security incidents, identify malware droppers, and trace attack vectors.</p>
                
                <h3>Privacy Auditing</h3>
                <p>Help organizations ensure sensitive metadata is removed before public document release.</p>
            </div>
        </div>
    </section>

    <!-- Screenshots -->
    <section class="section section-dark">
        <div class="container">
            <h2 class="section-title">Screenshots & Examples</h2>
            <div class="screenshot-gallery">
                <div class="screenshot">
                    <img src="images/cli-interface.jpg" alt="CLI Interface" />
                </div>
                <div class="screenshot">
                    <img src="images/html-report.jpg" alt="HTML Report Output" />
                </div>
            </div>
        </div>
    </section>

    <!-- Learning Outcomes -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">What I Learned</h2>
            <div class="learning-outcomes">
                <p>This project deepened my understanding of:</p>
                <ul style="color: #a8b2c7; line-height: 2; margin-left: 20px;">
                    <li>File format specifications and internal structures</li>
                    <li>Digital forensics methodologies and best practices</li>
                    <li>Python libraries for binary file manipulation</li>
                    <li>Metadata standards (EXIF, XMP, IPTC)</li>
                    <li>Anti-forensics techniques and how to detect them</li>
                    <li>Creating user-friendly CLI tools with rich output</li>
                    <li>Generating comprehensive forensic reports</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
        <div class="container">
            <h2>Interested in This Project?</h2>
            <p>Check out the source code or reach out to discuss forensics and metadata analysis</p>
            <div class="cta-buttons">
                <a href="https://github.com/cipherbite/forensic-metadata-harvester" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View Code
                </a>
                <a href="/#contact" class="btn btn-secondary">
                    <i class="fas fa-envelope"></i> Contact Me
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>© 2025 David Dylag | Forensic Metadata Harvester Project</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="/assets/js/script.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
</body>
</html>
