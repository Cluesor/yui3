YUI.add("dd-delegate",function(E){var D=function(F){D.superclass.constructor.apply(this,arguments);},C="container",B="nodes",A=E.Node.create("<div>Temp Node</div>");E.extend(D,E.Base,{_bubbleTargets:E.DD.DDM,dd:null,_shimState:null,_handles:null,_onNodeChange:function(F){this.set("dragNode",F.newVal);},_afterDragEnd:function(F){E.DD.DDM._noShim=this._shimState;this.set("lastNode",this.dd.get("node"));this.get("lastNode").removeClass(E.DD.DDM.CSS_PREFIX+"-dragging");this.dd._unprep();this.dd.set("node",A);},_delMouseDown:function(H){var G=H.currentTarget,F=this.dd;if(G.test(this.get(B))&&!G.test(this.get("invalid"))){this._shimState=E.DD.DDM._noShim;E.DD.DDM._noShim=true;this.set("currentNode",G);F.set("node",G);if(F.proxy){F.set("dragNode",E.DD.DDM._proxy);}else{F.set("dragNode",G);}F._prep();F.fire("drag:mouseDown",{ev:H});}},_onMouseEnter:function(F){this._shimState=E.DD.DDM._noShim;E.DD.DDM._noShim=true;},_onMouseLeave:function(F){E.DD.DDM._noShim=this._shimState;},initializer:function(G){this._handles=[];var H=E.clone(this.get("dragConfig")||{}),F=this.get(C);H.node=A.cloneNode(true);H.bubbleTargets=this;if(this.get("handles")){H.handles=this.get("handles");}this.dd=new E.DD.Drag(H);this.dd.after("drag:end",E.bind(this._afterDragEnd,this));this.dd.on("dragNodeChange",E.bind(this._onNodeChange,this));this.dd.after("drag:mouseup",function(){this._unprep();});this._handles.push(E.delegate(E.DD.Drag.START_EVENT,E.bind(this._delMouseDown,this),F,this.get(B)));this._handles.push(E.on("mouseenter",E.bind(this._onMouseEnter,this),F));this._handles.push(E.on("mouseleave",E.bind(this._onMouseLeave,this),F));E.later(50,this,this.syncTargets);E.DD.DDM.regDelegate(this);},syncTargets:function(){if(!E.Plugin.Drop||this.get("destroyed")){return;}var G,F,H;if(this.get("target")){G=E.one(this.get(C)).all(this.get(B));F=this.dd.get("groups");H=this.get("dragConfig");if(H&&"groups" in H){F=H.groups;}G.each(function(I){this.createDrop(I,F);},this);}return this;},createDrop:function(H,F){var G={useShim:false,bubbleTargets:this};if(!H.drop){H.plug(E.Plugin.Drop,G);}H.drop.set("groups",F);return H;},destructor:function(){if(this.dd){this.dd.destroy();}if(E.Plugin.Drop){var F=E.one(this.get(C)).all(this.get(B));F.unplug(E.Plugin.Drop);}E.each(this._handles,function(G){G.detach();});}},{NAME:"delegate",ATTRS:{container:{value:"body"},nodes:{value:".dd-draggable"},invalid:{value:"input, select, button, a, textarea"},lastNode:{value:A},currentNode:{value:A},dragNode:{value:A},over:{value:false},target:{value:false},dragConfig:{value:null},handles:{value:null}}});E.mix(E.DD.DDM,{_delegates:[],regDelegate:function(F){this._delegates.push(F);},getDelegate:function(G){var F=null;G=E.one(G);E.each(this._delegates,function(H){if(G.test(H.get(C))){F=H;}},this);return F;}});E.namespace("DD");E.DD.Delegate=D;},"@VERSION@",{optional:["dd-drop-plugin"],requires:["dd-drag","event-mouseenter"],skinnable:false});