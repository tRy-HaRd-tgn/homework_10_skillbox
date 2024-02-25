document.addEventListener('DOMContentLoaded', function()
{
    document.querySelectorAll('.section-about__how-we-work-btn').forEach(function(btn)
    {
        btn.addEventListener('click', function(event)
        {
            const path = event.currentTarget.dataset.path
            console.log(path)       
            document.querySelectorAll('.section-about__how-we-work-main').forEach(function(btn)
            {
                btn.classList.remove('content-active')                
            })    
            document.querySelector(`[data-target="${path}"]`).classList.add('content-active')
        })       
    })

})