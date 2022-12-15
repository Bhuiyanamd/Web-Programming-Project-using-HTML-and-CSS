function setLocalStorage(name,value){localStorage.setItem(name, value);} 
function getLocalStorage(name){return localStorage.getItem(name);}
function getraw()
{
	var i,str="";
	for (i = 0; i < localStorage.length; i++) 
	{
		var name=localStorage.key(i);
		var value=localStorage.getItem(localStorage.key(i));
		str=str+name+"="+value+";";
    }
    return str;
}
function delLocalStorage(name){localStorage.removeItem(name);}
function delAllLocalStorage(){localStorage.clear();}
