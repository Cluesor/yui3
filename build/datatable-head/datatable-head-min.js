YUI.add("datatable-head",function(g){var d=g.Lang,f=d.sub,a=d.isArray,b=g.Array,e=g.ClassNameManager,c=e.getClassName;g.namespace("DataTable").HeaderView=g.Base.create("tableHeader",g.View,[],{CELL_TEMPLATE:'<th id="{_yuid}" {abbr} colspan="{_colspan}" rowspan="{_rowspan}" class="{className}">{content}</th>',ROW_TEMPLATE:"<tr>{content}</tr>",getClassName:function(){var h=b(arguments);h.unshift(this._cssPrefix);h.push(true);return c.apply(e,h);},render:function(){var r=this.get("container"),k=this.columns,l={_colspan:1,_rowspan:1,abbr:""},n,p,m,t,h,o,q,s;if(r&&k){o="";if(k.length){for(n=0,p=k.length;n<p;++n){q="";for(m=0,t=k[n].length;m<t;++m){h=k[n][m];s=g.merge(l,h,{className:this.getClassName("header"),content:h.label||h.key||("Column "+(m+1))});if(h.abbr){s.abbr='abbr="'+h.abbr+'"';}if(h.className){s.className+=" "+h.className;}if(h._id){s.className+=" "+this.getClassName("col",h._id);}q+=f(h.headerTemplate||this.CELL_TEMPLATE,s);}o+=f(this.ROW_TEMPLATE,{content:q});}}r.setContent(o);}this.bindUI();return this;},_cssPrefix:e.getClassName("table"),_afterColumnsChange:function(h){this.columns=this._parseColumns(h.newVal);this.render();},bindUI:function(){if(this.source&&!this._eventHandles.columnsChange){this._eventHandles.columnsChange=this.source.after("columnsChange",g.bind("_afterColumnsChange",this));}},destructor:function(){(new g.EventHandle(g.Object.values(this._eventHandles))).detach();},initializer:function(h){h||(h={});var i=h.cssPrefix||(h.source||{}).cssPrefix;this.source=h.source;this.columns=this._parseColumns(h.columns);this._eventHandles=[];if(i){this._cssPrefix=i;}},_parseColumns:function(o){var l=[],r=[],q=1,t,u,k,h,s,n,p,m;if(a(o)&&o.length){r.push([o,-1]);while(r.length){t=r[r.length-1];u=t[0];n=t[1]+1;for(p=u.length;n<p;++n){k=u[n];h=k.children;g.stamp(k);if(a(h)&&h.length){r.push([h,-1]);t[1]=n;q=Math.max(q,r.length);break;}else{k._colspan=1;}}if(n>=p){if(r.length>1){t=r[r.length-2];s=t[0][t[1]];s._colspan=0;for(n=0,p=u.length;n<p;++n){s._colspan+=u[n]._colspan;u[n]._parent=s;}}r.pop();}}for(n=0;n<q;++n){l.push([]);}r.push([o,-1]);while(r.length){t=r[r.length-1];u=t[0];n=t[1]+1;for(p=u.length;n<p;++n){k=u[n];h=k.children;l[r.length-1].push(k);t[1]=n;k._headers=[k._yuid];for(m=r.length-2;m>=0;--m){s=r[m][0][r[m][1]];k._headers.unshift(s._yuid);}if(h&&h.length){r.push([h,-1]);break;}else{k._rowspan=q-r.length+1;}}if(n>=p){r.pop();}}}return l;}});},"@VERSION@",{requires:["datatable-core","view","classnamemanager"]});