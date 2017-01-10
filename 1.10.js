var str = "da;,fl;al;da;dsal;fsafdsfdswl,lflg,otjrhitbnuuyno;sncaka;nfkenfjen vj"
			function getFn(str,num){
				var arr = [];
				var arr2 = [];
				var arr1 = str.replace(/[\|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g," ").split(" ");
				for(var i=0;i<arr1.length;i++){
					if(arr1[i]){
						arr.push(arr1[i]);
						arr2.push(arr1[i]);
					}
				}
				
				var p = {};
				var count = 0;
				if(num >= arr.length || num <= 0){
					num = arr.length-1;
				}
				for(var i = 0; i<arr.length; i++){
					for(var j = 0; j<arr2.length; j++){
						if(arr[i] == arr[j]){
							count += 1;
						}
					}
					arr2.splice(j,1);
					p[arr[i]] = count;
					count = 0;
				}
				var arrP = [];
				for(var m in p){
					arrP.push(m+":"+p[m])
				}
				arrP.sort(function(a,b){
		            return Number(b.split(":")[1]) - Number(a.split(":")[1])
		        });
		        
//		        var keyWord = [];
//		        for(var i=0;i<arrP.length;i++){
//		        		keyWord.push(arrP[i].split(":")[0])
//		        }
		        return arrP.slice(0,num);
			}
			
			console.log(getFn(str,5))  