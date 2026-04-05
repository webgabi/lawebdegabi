const topScroll = document.querySelector('.doubleScroll-scroll-wrapper');
const topInner = document.querySelector('.doubleScroll-scroll');
const tableWrapper = document.querySelector('.table-wrapper');

function updateScrollWidth() {
  topInner.style.width = tableWrapper.scrollWidth + 'px';
}

updateScrollWidth();
window.addEventListener('resize', updateScrollWidth);

topScroll.addEventListener('scroll', () => {
  tableWrapper.scrollLeft = topScroll.scrollLeft;
});

tableWrapper.addEventListener('scroll', () => {
  topScroll.scrollLeft = tableWrapper.scrollLeft;
});
