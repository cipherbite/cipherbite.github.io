# Digital Forensics & Incident Response Projects

## Overview

This directory contains specialized tools and frameworks for digital forensics, incident response, and security analysis. Each project addresses specific challenges in modern forensic investigations and threat detection.

## Projects

### Forensic Metadata Harvester

Advanced metadata extraction and analysis tool for forensic investigations.

- **Purpose**: Extract hidden metadata from various file formats including images, documents, and executables
- **Key Features**: EXIF data extraction, PDF metadata analysis, timestamp correlation, hash verification
- **Technologies**: Python, ExifRead, PyPDF2, python-magic
- **Use Cases**: Evidence collection, timeline reconstruction, data authenticity verification

### Container Memory Forensics

Memory analysis framework specifically designed for containerized environments.

- **Purpose**: Analyze memory dumps from Docker containers and Kubernetes pods
- **Key Features**: Process enumeration, network connection analysis, malware detection, secret extraction
- **Technologies**: Go, Volatility3 framework, Docker API
- **Use Cases**: Container breach investigation, runtime security analysis, compliance auditing

### DNS Exfiltration Detector

Real-time detection system for identifying data exfiltration attempts through DNS channels.

- **Purpose**: Monitor and analyze DNS traffic for signs of data theft or command & control communication
- **Key Features**: ML-based anomaly detection, pattern matching, statistical analysis, real-time alerting
- **Technologies**: Python, TensorFlow, Scapy, ElasticSearch
- **Use Cases**: Network security monitoring, APT detection, data loss prevention

### Advanced Steganography Detection

Statistical and machine learning approaches to detect hidden data in multimedia files.

- **Purpose**: Identify steganographic content in images, audio, and video files
- **Key Features**: Chi-square analysis, RS analysis, deep learning detection, batch processing
- **Technologies**: C++, OpenCV, TensorFlow, statistical libraries
- **Use Cases**: Forensic analysis, insider threat detection, intellectual property protection

### Post-Breach Identity Forensics

Comprehensive framework for analyzing identity-related security incidents.

- **Purpose**: Reconstruct attack timelines and analyze identity compromise patterns
- **Key Features**: Lateral movement tracking, privilege escalation detection, identity graph analysis
- **Technologies**: Rust, Neo4j, machine learning, log analysis
- **Use Cases**: Incident response, breach investigation, security posture assessment

## Getting Started

Each project includes:
1. Detailed installation instructions
2. API documentation
3. Sample datasets for testing
4. Integration guides

## Research Papers

Related research and whitepapers can be found in each project's `/docs` directory.

## Contributing

These tools are open for security research. Please review individual project licenses before use.

## Disclaimer

All tools are intended for authorized security testing and forensic analysis only. Users are responsible for compliance with applicable laws and regulations.
