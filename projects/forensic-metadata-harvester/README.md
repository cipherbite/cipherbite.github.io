# 🔍 Forensic Metadata Harvester

[![Python](https://img.shields.io/badge/Python-3.8+-3776ab?style=for-the-badge&logo=python)](https://python.org)
[![License](https://img.shields.io/badge/License-MIT-00ff88?style=for-the-badge)](../../LICENSE)
[![Status](https://img.shields.io/badge/Status-Complete-00d4ff?style=for-the-badge)](https://github.com/cipherbite/forensic-metadata-harvester)

> Deep metadata extraction tool for digital forensics and OSINT investigations

## 🎯 Overview

The Forensic Metadata Harvester is a comprehensive Python tool designed for deep metadata extraction from various file types. Unlike basic EXIF readers, this tool digs deeper into file structures to uncover hidden information, edit histories, embedded objects, and forensic artifacts that can be crucial in investigations.

## ✨ Key Features

- **🔍 Deep Metadata Extraction** - Beyond basic EXIF data
- **📜 Document History Analysis** - Reveals revision history and tracked changes  
- **📄 PDF Deep Analysis** - Extracts JavaScript, embedded files, hidden layers
- **🔐 Digital Fingerprinting** - Identifies software used to create/edit files
- **📊 Structured Output** - JSON, CSV, HTML reports
- **⚡ CLI & API Interface** - Command-line tool and Python API

## 🛠️ Technical Stack

```python
Core Technologies:
├── Python 3.8+
├── ExifRead (EXIF data extraction)
├── PyPDF2 (PDF analysis)
├── python-docx (Office documents)
├── Pillow (Image processing)
├── python-magic (File type detection)
├── pikepdf (Advanced PDF analysis)
└── Beautiful Soup (XML/HTML parsing)
