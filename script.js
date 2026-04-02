function showPage(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Remove 'active' styling from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Show the selected page
    document.getElementById(pageId).classList.add('active');

    // 4. Highlight the button that was clicked
    event.currentTarget.classList.add('active');
}
