let count=0,flag=1,empty=9,game=0,s_count=0,icon,opp,start_move,hard_count=0,tp=0;
const pause=(i)=>{
    const a=document.getElementsByClassName('pm')
    if(i==1){
        a[0].style.display='flex'
    }
    else{
        a[0].style.display='none'
    }
}
const rld=()=>{
    location.reload();
}
const sld=()=>{
    s_count++;
    const t=document.getElementsByClassName('back')
    if(s_count%2==1){
        t[0].style.animation='slide 0.7s forwards'
    }
    else{
        t[0].style.animation='slid 0.7s forwards'
    }
}
const choose=()=>{
    const a=document.getElementsByClassName('main')
    a[0].style.display='flex'
}
const back=()=>{
    console.log(s_count)
    const a=document.getElementsByClassName('main')
    a[0].style.display='none'
}
diff=()=>{
    const a=document.getElementById('diff')
    count++;
    a.innerText=arr[count%3]
    count=count%3
}
let arr=['easy','medium','hard']
let ply=[0,0,0,0,0,0,0,0,0]
const play=()=>{
    const a=document.getElementsByClassName('head');
    const b=document.getElementsByClassName('men');
    const c=document.getElementsByClassName('temp');
    document.getElementsByClassName("pause")[0].style.display='block'
    a[0].style.display='none'
    b[0].style.display='none'
    c[0].style.display='flex'
    if(s_count%2==1){
        icon='x'
        opp='o'
    }
    else{
        icon='o'
        opp='x'
    }
}
const check=(i)=>{
    if(count==0){
    if(flag==1 && game==0){
        if(ply[i-1]==0){
            const t=document.getElementsByClassName('space')
            t[i-1].innerHTML=icon
            ply[i-1]=icon
            flag=0
            empty--;
            win()
            if(flag==0 && empty!=0 && game==0){
                let m=start()
                if(m==0){
                    rand(empty)
                }
                empty--;
                win()
                flag=1
            }
        }
    }
}
    else if(count==1){
        if(flag==1 && game==0){
            if(ply[i-1]==0){
                const t=document.getElementsByClassName('space')
                t[i-1].innerHTML=icon
                ply[i-1]=icon
                flag=0
                empty--;
                win()
                if(flag==0 && empty!=0 && game==0){
                    let m=start()
                    if(m==0){
                        m=med()
                    }
                    if(m==0){
                        rand(empty)
                    }
                    empty--;
                    win()
                    flag=1
                }
            }
        }
    }
    else if(count==2){
        if(flag==1 && game==0){
            if(ply[i-1]==0){
                const t=document.getElementsByClassName('space')
                t[i-1].innerHTML=icon
                ply[i-1]=icon
                flag=0
                empty--;
                if(empty==8){
                    start_move=i-1
                }
                win()
                if(flag==0 && empty!=0 && game==0){
                    if(start_move==4 && hard_count==0){
                        center()
                        hard_count++
                        tp++
                    }
                    else if((start_move==0 || start_move==2 || start_move==6 || start_move==8 ) && hard_count<=1 ){
                        corner()
                        hard_count++
                    }
                    else{
                        let m=start()
                        if(m==0){
                            m=med()
                        }
                        if(m==0){
                            rand(empty)
                        }
                    }
                    empty--;
                    win()
                    flag=1
                }
            }
        }
    }
}
rand=(i)=>{
    let temp,cn=0,add;
    const t=document.getElementsByClassName('space')
    temp=Math.floor(Math.random()*i)+1;
    for(let j=0;cn!=temp ;j++){
        if(ply[j]==0){
            cn++;
            add=j;
        }
    }
    t[add].innerHTML=opp
    ply[add]=opp
}
const t=document.getElementsByClassName('win')
let v=document.getElementById('bann')
const win=()=>{
    let go=0
    for(let i=0;i<=6;i=i+3){
        if(ply[i]==ply[i+1] && ply[i+1]==ply[i+2] && ply[i]!=0){
            go=1;
            game=1;
            if(ply[i]==icon){
                t[0].innerHTML='you won'
            }
            else{
                t[0].innerHTML='computer won'
            }
        }
    }
    if(go==0){
        for(let i=0;i<=2;i++){
            if(ply[i]==ply[i+3] && ply[i+3]==ply[i+6] && ply[i]!=0){
                go=1;
                game=1;
                if(ply[i]==icon){
                    t[0].innerHTML='you won'
                }
                else{
                    t[0].innerHTML='computer won'
                }
            }
        }
    }
    if(go==0){
        if(ply[0]==ply[4] && ply[4]==ply[8] && ply[0]!=0){
            go=1;
            game=1;
            if(ply[0]==icon){
                t[0].innerHTML='you won'
            }
            else{
                t[0].innerHTML='computer won'
            }
        }
        else if(ply[2]==ply[4] && ply[4]==ply[6] && ply[2]!=0){
            go=1;
            game=1;
            if(ply[2]==icon){
                t[0].innerHTML='you won'
            }
            else{
                t[0].innerHTML='computer won'
            }
        }
    }
    if(go==0 && empty==0){
        game=1
        t[0].innerHTML='match draw'
    }
    if(game==1){
        v.style.animation='win 0.6s linear forwards'
        document.getElementsByClassName("pause")[0].style.display='none'
    }
}
const med=()=>{
    const t=document.getElementsByClassName('space')
    let t_count=0,coun=0,point,go=0;
    for(let i=0;i<=6;i=i+3){
        t_count=0
        coun=0
        for(let j=i;j<=i+2;j++){
            if(ply[j]==icon){
                t_count++;
            }
            else if(ply[j]==0){
                coun++;
                point=j
            }
        }
        if(t_count==2 && coun==1){
            console.log('hor:'+ply[point])
            t[point].innerHTML=opp
            go=1
            ply[point]=opp
            break;
        }
    }
    if(go==0){
        for(let i=0;i<=2;i++){
            t_count=0
            coun=0
            for(let j=i;j<=i+6;j=j+3){
                if(ply[j]==icon){
                    t_count++;
                }
                else if(ply[j]==0){
                    coun++;
                    point=j
                }
            }
            if(t_count==2 && coun==1){
                t[point].innerHTML=opp
                ply[point]=opp
                go=1
                break;
            }
        }
    }
    if(go==0){
        t_count=0
        coun=0
        for(let i=0;i<=8;i=i+4){
            if(ply[i]==icon){
                t_count++
            }
            else if(ply[i]==0){
                coun++;
                point=i
            }
        }
        if(t_count==2 && coun==1){
            t[point].innerHTML=opp
            ply[point]=opp
            go=1
        }
    }
    if(go==0){
        t_count=0
        coun=0
        for(let i=2;i<=6;i=i+2){
            if(ply[i]==icon){
                t_count++
            }
            else if(ply[i]==0){
                coun++;
                point=i
            }
        }
        if(t_count==2 && coun==1){
            t[point].innerHTML=opp
            ply[point]=opp
            go=1
        }
    }
    return go;
}
const start=()=>{
    const t=document.getElementsByClassName('space')
    let t_count=0,coun=0,point,go=0;
    for(let i=0;i<=6;i=i+3){
        t_count=0
        coun=0
        for(let j=i;j<=i+2;j++){
            if(ply[j]==opp){
                t_count++;
            }
            else if(ply[j]==0){
                coun++;
                point=j
            }
        }
        if(t_count==2 && coun==1){
            console.log('hor:'+ply[point])
            t[point].innerHTML=opp
            go=1
            ply[point]=opp
            break;
        }
    }
    if(go==0){
        for(let i=0;i<=2;i++){
            t_count=0
            coun=0
            for(let j=i;j<=i+6;j=j+3){
                if(ply[j]==opp){
                    t_count++;
                }
                else if(ply[j]==0){
                    coun++;
                    point=j
                }
            }
            if(t_count==2 && coun==1){
                t[point].innerHTML=opp
                ply[point]=opp
                go=1
                break;
            }
        }
    }
    if(go==0){
        t_count=0
        coun=0
        for(let i=0;i<=8;i=i+4){
            if(ply[i]==opp){
                t_count++
            }
            else if(ply[i]==0){
                coun++;
                point=i
            }
        }
        if(t_count==2 && coun==1){
            t[point].innerHTML=opp
            ply[point]=opp
            go=1
        }
    }
    if(go==0){
        t_count=0
        coun=0
        for(let i=2;i<=6;i=i+2){
            if(ply[i]==opp){
                t_count++
            }
            else if(ply[i]==0){
                coun++;
                point=i
            }
        }
        if(t_count==2 && coun==1){
            t[point].innerHTML=opp
            ply[point]=opp
            go=1
        }
    }
    return go;
}
const center=()=>{
    let a=[0,2,6,8]
    let b=Math.floor(Math.random()*4)
    console.log(b,opp,a[b])
    const t=document.getElementsByClassName('space')
    t[a[b]].innerHTML=opp
    ply[a[b]]=opp
}
const corner=()=>{
    let a=[1,3,5,7],gg=1;
    let b=Math.floor(Math.random()*4)
    const t=document.getElementsByClassName('space')
    if(hard_count==0){
        t[4].innerHTML=opp
        ply[4]=opp
    }
    else{
        gg=med();
    }
    if(gg==0){
        t[a[b]].innerHTML=opp
        ply[a[b]]=opp
    }
}
