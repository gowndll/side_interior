function calcTooltip() {
  const windowWidth = window.innerWidth;
  const toolTips = document.querySelectorAll('.tooltip-container');
  toolTips.forEach((toolTip) => {
    const tooltipTxt = toolTip.querySelector('.tooltip');
    const tooltipLeft = tooltipTxt.getBoundingClientRect().left;
    const tooltipRight = tooltipTxt.getBoundingClientRect().right;
      // console.log('tooltipLeft:'+tooltipLeft)
      // console.log('tooltipRight:'+tooltipRight)
      // console.log('windowWidth:'+windowWidth)

    if(tooltipLeft < 0) {
      tooltipTxt.style.whiteSpace = 'normal';
      tooltipTxt.style.width = tooltipRight+tooltipLeft-20+'px';
    } else {
      tooltipTxt.style.whiteSpace = 'norwrap';
    }

    if(tooltipRight > windowWidth) {
      tooltipTxt.style.whiteSpace = 'normal';
      tooltipTxt.style.width = tooltipRight-tooltipLeft-(tooltipRight-windowWidth)-20+'px';
    } else {
      tooltipTxt.style.whiteSpace = 'norwrap';
    }
  });
}

calcTooltip();


window.addEventListener('resize', () => {
  calcTooltip();
});