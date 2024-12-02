// PDF viewer functions
export function openPdfViewer(pdfPath) {
    const viewer = document.getElementById('pdf-viewer');
    const frame = document.getElementById('pdf-frame');
    
    // Ensure the path starts with a forward slash
    const formattedPath = pdfPath.startsWith('/') ? pdfPath : `/${pdfPath}`;
    frame.src = formattedPath;
    
    viewer.classList.add('active');
    
    // Log for debugging
    console.log('Opening PDF:', formattedPath);
}

export function closePdfViewer() {
    const viewer = document.getElementById('pdf-viewer');
    const frame = document.getElementById('pdf-frame');
    viewer.classList.remove('active');
    frame.src = '';
}