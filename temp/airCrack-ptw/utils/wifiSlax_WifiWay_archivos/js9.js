function fsC(name, value, expires, path, domain, secure) {if(uhist!=1) 
{ document.cookie= name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path= " + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : ""); }}
function fgC(name)  { if(uhist!=1) 
{ var dc = document.cookie;var prefix = name + "=";var begin = dc.indexOf("; " + prefix); if (begin == -1) { begin = dc.indexOf(prefix); if (begin != 0) return null; } else {begin += 2;} var end = document.cookie.indexOf(";", begin); if (end == -1) {end = dc.length;} 
return unescape(dc.substring(begin + prefix.length, end));}}
function fdC(name, path, domain) {if (getCookie(name)) { document.cookie = name + "=" + ((path) ? "; path=" + path : "/") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";}}
var stjsver="11";if(!uhist){var uhist=0;}if(!zstpagid){var zstpagid=0;}if(!zstROI){var zstROI=0;}if(!ExFd){var ExFd=0;}
var vNh=fgC('NoHits');if(vNh>0){stjsver="0";}
function fpU(t){t=unescape(t);t=escape(t);t=t.split("@").join("%40");t=t.split(".").join("%2E");t=t.split("*").join("%2A");t=t.split("/").join("%2F");t=t.split("+").join("%2B");return(t);}
function fRe(t){t=unescape(t);if(t=="0"||t==""||t=="-")return 0;var i=0,h,k;if((i=t.indexOf("://"))<0)return 1;h=t.substring(i+3,t.length);if(h.indexOf("/")>-1){h=h.substring(0,h.indexOf("/"));}vRd=h;for(var ii=0;ii<aM.length;ii++){if(h.indexOf(aM[ii])>-1){vSm=ii;trovato_m=2;if((i=t.indexOf("?"+Am2[ii]+"="))>-1||(i=t.indexOf("&"+Am2[ii]+"="))>-1){k=t.substring(i+Am2[ii].length+2,t.length);if((i=k.indexOf("&"))>-1)k=k.substring(0,i);sC=k;}}}return 100;}if(!s_sid)var s_sid=0;var d_vars="";var Cn='lastacc_'+s_sid;var expdate=new Date();expdate.setTime(expdate.getTime()+(24*60*60*1000*365));var lastacc;var sn=1;var send_ppu=1;var snv=1;var send_cookie_attivati=0;var dA=expdate.getTime();var Stup=null;var send_tempo_prima_pagina=null;var Vcu=document.URL;var rU=document.referrer;if(top.frames.length != 0 && ExFd==5) {  rU = "" + top.document.referrer; } 
var vRd="0";var vCd=Vcu;var vCd_nosub="0";var tmp1;var tmp2;var tmp_split;var tmp_chiave;var vSm=0;var sC="";var trovato_m=0;var vCm;var vCm_chiave;var aM=new Array();var Am2=new Array();var Ascc=new Array();var tmp_split_sito;var old_pagid;lastacc=fgC('HstCla'+s_sid);(lastacc)?lastacc:lastacc=null;fsC('HstCla'+s_sid,(dA),expdate,"",'',0);send_cookie_attivati=fgC('HstCla'+s_sid);(!(send_cookie_attivati))?send_cookie_attivati=0:send_cookie_attivati=Math.floor(Math.random()*5000);if((lastacc)){var diff_accessi=(dA-lastacc);if(diff_accessi<3600000){sn=0;send_ppu=fgC('c_ppu_'+s_sid);(send_ppu)?send_ppu++:send_ppu=1;fsC('c_ppu_'+s_sid,(send_ppu),expdate,"",'',0);snv=fgC('HstCnv'+s_sid);(snv)?snv:snv=1000;send_tempo_prima_pagina=fgC('HstC1p'+s_sid);(send_tempo_prima_pagina)?send_tempo_prima_pagina:send_tempo_prima_pagina=dA,fsC('HstC1p'+s_sid,(lastacc),expdate,"",'',0);Stup=fgC('c_ppu_'+s_sid);(Stup)?Stup:Stup=lastacc;fsC('HstCup'+s_sid,(send_ppu),expdate,"",'',0);}else{sn=1;snv=fgC('HstCnv'+s_sid);(snv)?snv++:snv=1;fsC('HstCnv'+s_sid,(snv),expdate,"",'',0);}}else{sn=1;snv=1;fsC('HstCnv'+s_sid,(snv),expdate,"",'',0);}if(sn==1){var send_tempo_prima_pagina=dA;var Stup=dA;fsC('HstC1p'+s_sid,(send_tempo_prima_pagina),expdate,"",'',0);fsC('HstCup'+s_sid,(Stup),expdate,"",'',0);send_ppu=1;fsC('c_ppu_'+s_sid,(send_ppu),expdate,"",'',0);}if((i=vCd.indexOf("://"))<0){vCd="0";}else{vCd=vCd.substring(i+3,vCd.length);if(vCd.indexOf("/")>-1){vCd=vCd.substring(0,vCd.indexOf("/"));}}d_vars=d_vars+'<br>curdominio:'+vCd;d_vars=d_vars+'<br>cururl:'+Vcu;aM[0]="google";Am2[0]="q";aM[1]="yahoo";Am2[1]="p";aM[2]="search.msn";Am2[2]="q";aM[3]="aol";Am2[3]="query";aM[4]="lycos";Am2[4]="query";aM[5]="ask";Am2[5]="q";aM[6]="altavista";Am2[6]="q";aM[8]="netscape";Am2[8]="query";aM[9]="earthlink";Am2[9]="q";aM[10]="cnn";Am2[10]="query";aM[11]="looksmart";Am2[11]="key";aM[12]="about";Am2[12]="terms";aM[13]="excite";Am2[13]="qkw";aM[14]="mamma";Am2[14]="query";aM[15]="alltheweb";Am2[15]="q";aM[16]="gigablast";Am2[16]="q";aM[17]="voila";Am2[17]="kw";aM[18]="virgilio";Am2[18]="qs";aM[7]="teoma";Am2[7]="q";if((rU.length<2)||(rU=="")||(rU=="undefined")||(!(rU))){rU="1000";}if(sn==1&&rU!="1000"){fRe(rU);if(trovato_m==2){fsC('vCm_'+s_sid,(vSm),expdate,"",'',0);fsC('vCm_chiave_'+s_sid,(sC),expdate,"",'',0);}else{if(vRd.indexOf(vCd)>=0)vRd="0";d_vars=d_vars+'<br>refdominio3:'+vRd;d_vars=d_vars+'<br>tmp2partecentraredominioref:'+tmp2;}fsC('c_ref_'+s_sid,(rU),expdate,"",'',0);fsC('c_refdom_'+s_sid,(vRd),expdate,"",'',0);}else{rU="1000";vRd="0";}if(sn==0){rU=fgC('c_ref_'+s_sid);(rU)?rU=rU:rU="1000";vRd=fgC('c_refdom_'+s_sid);(vRd)?vRd=vRd:vRd="0";vSm=fgC('vCm_'+s_sid);(vSm)?trovato_m=1:vSm="0";sC=fgC('vCm_chiave_'+s_sid);(sC)?sC=sC:sC="0";}var UI_nav=navigator.appName;var is_ns=(navigator.appName.indexOf('Microsoft')!=-1)?1:0;var is_ns4=document.layers?1:0;var is_ns6=document.getElementById?1:0;var is_ie=document.all?1:0;var UI_lang="0";if(is_ns4||is_ns6||is_ns)UI_lang=navigator.language+"";if(is_ie)var UI_lang=navigator.browserLanguage+"";var UI_colors=(is_ie)?screen.colorDepth:screen.pixelDepth;var UI_scsize=screen.width;var send_vars="";send_vars+=""+s_sid;send_vars+="&"+stjsver;send_vars+="&"+sn;send_vars+="&"+send_ppu;send_vars+="&"+snv;send_vars+="&"+send_cookie_attivati;if(send_cookie_attivati<1){diff_accessi=Math.floor(Math.random()*5000);}if((diff_accessi=="")||(diff_accessi=="undefined")||(!(diff_accessi))){diff_accessi=0;}send_vars+="&"+diff_accessi;send_vars+="&"+trovato_m;if(trovato_m>0){send_vars+="&"+vSm;send_vars+="&"+fpU(sC.toLowerCase());}else{send_vars+="&0";send_vars+="&0";}rU=fpU(rU);vRd=fpU(vRd);send_vars+="&"+rU;send_vars+="&"+vRd;if(!(zstpagid))var zstpagid=0;old_pagid=fgC('c_old_pagid_'+s_sid);(old_pagid)?old_pagid:old_pagid=0;fsC('c_old_pagid_'+s_sid,(zstpagid),expdate,"",'',0);send_vars+="&"+zstpagid;send_vars+="&"+old_pagid;if(zstROI){return_roi=fgC('c_ret_roi_'+s_sid+'-'+zstpagid);if(return_roi==1){var zstROI=0;}else{fsC('c_ret_roi_'+s_sid+'-'+zstpagid,(zstROI),(expdate),"",'',0);}}else{var zstROI=0;}send_vars+="&"+zstROI;send_vars+="&"+UI_lang;send_vars+="&"+UI_scsize;Vcu=fpU(Vcu);send_vars+="&"+Vcu;var str_contatore='';function chfh(t){if(cimg>0)document.writeln('<scr'+'ipt language=JavaScript>document.writeln(\'<embed src="http://s10.histats.com/'+cimg+'.swf"  flashvars="esterno=1&var_esterno='+str_contatore+'&acsid='+s_sid+'" width="'+cwi+'" height="'+che+'" quality="high" wmode="transparent" name="'+cimg+'.swf" align="middle" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">\');<\/scr'+'ipt>');}if(((cimg==0)||(cimg>=500&&cimg<600))&&s_sid>0){document.writeln('<script type="text/javascript" language="JavaScript" SRC="http://s'+st_dominio+'.histats.com/stats/0.php?'+send_vars+'&"><\\\/script>\');');document.writeln('<\/SCR'+'IPT>');chfh('1');}if(cimg>0&&s_sid>0&&cimg<10000 && (cimg<500 || cimg>=600)){document.writeln('<script type="text/javascript" language="JavaScript" SRC="http://s'+st_dominio+'.histats.com/stats/'+s_sid+'.php?'+send_vars+'&"><\\\/script>\');');document.writeln('<\/SCR'+'IPT>');}
