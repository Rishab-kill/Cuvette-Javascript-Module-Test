var ruleBox=document.querySelector('.rules-box');
var hideRuleBox=document.querySelector('.disappear-rules-box');
var ruleButton=document.querySelector('.trophy-rules')
ruleButton.addEventListener('click',function(){
    var ruleBoxStyle=window.getComputedStyle(ruleBox);
    if(ruleBoxStyle.display==='none'){
        ruleBox.style.display='flex';
        hideRuleBox.style.display='flex';
    }
});
hideRuleBox.addEventListener('click',function(){
    ruleBox.style.display='none';
    hideRuleBox.style.display='none';
});
document.querySelector('.wReplay').addEventListener('click', function() {
    window.location.href = 'index.html';
});