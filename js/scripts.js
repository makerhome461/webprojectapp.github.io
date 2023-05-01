
(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
    (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
  var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
  var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
})(window,document);

function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'demo@example.com' || a == 'demo1@example.com' || a == 'demo3@example.com')
    { 
        var b= a.substr(0,5);
aptrinsic("identify",
{
//User Fields
  "id": b, // Required for logged in app users
  "email":a,
  "firstName": "example"
},
{

});
        alert('valid user');
        location.href = "index.html";
    }
   
}

