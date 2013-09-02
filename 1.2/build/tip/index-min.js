/*! kcharts - v1.2 - 2013-09-02 4:31:55 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/tip/index",function(t,l,e,r){function i(l){if(l){var e=this,i={clsName:"ks-chart-default",autoRender:!0,isVisable:!1,boundry:{x:0,y:0,width:0,height:0},rootNode:n("body"),tpl:"",corner:{isShow:!1,tpl:"corner",css:{position:"absolute",marginLeft:0,marginTop:0}},anim:{easing:"easeOut",duration:.25},offset:{x:0,y:0},alignX:"left",alignY:"top"};e._events={MOVE:"move",SETCONT:"setcontent",HIDE:"hide"},e._cfg=t.mix(i,l,r,r,!0),e._cfg.rootNode=n(e._cfg.rootNode),e.init()}}var n=t.all;return t.Event,t.augment(i,l,{init:function(){var t=this,l=t._cfg;t._data={},t._tpl=l.tpl,t.$tip,t.bindEvent(),l.autoRender&&t.render()},bindEvent:function(){var l=this,e=l._cfg.template,r=l._events;l.on(r.MOVE,function(t){var e=t.x,r=t.y,i=t.style;l.isVisable()&&l._cfg.anim?l.animateTo(e,r):l.moveTo(e,r),i&&l.$tip.css(i)}),l.on(r.SETCONT,function(r){t.isFunction(e)?l.setContent(e(r.data)):l.renderTemplate(e,r.data)}),l.on(r.HIDE,function(){l.hide()})},getInstance:function(){return this.$tip},isVisable:function(){return"none"==this.$tip.css("display")?!1:!0},show:function(){var t=this;return t.$tip&&t.$tip.show(),t},hide:function(){var t=this;return t.$tip&&t.$tip.stop()&&t.$tip.hide(),t},moveTo:function(t,l){var e=this;e._prevtime=(new Date).getTime(),e.show();var r=e.getInstance(),i=e._cfg,n=(e._cfg.anim,e.getPos(t,l)),s=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),a=e.$corner;a&&a.css({"margin-left":s+t-n.x}),r.css({"margin-top":n.y,"margin-left":n.x})},animateTo:function(t,l,e){var r=this,i=r._cfg,n=i.anim,s=(new Date).getTime();r._prevtime&&100>s-r._prevtime&&r.animateFast(t,l,e),r.show(),r._prevtime=(new Date).getTime();var a=r.getInstance(),o=r.getPos(t,l),h=(i.corner.css["margin-top"]||i.corner.css.marginTop||0,i.corner.css["margin-left"]||i.corner.css.marginLeft||0),c=r.$corner;c&&c.css({"margin-left":h+t-o.x}),a.stop().animate({"margin-top":o.y,"margin-left":o.x},n.duration,n.easing,function(){e&&e()})},animateFast:function(t,l,e){var i,n,s=this,a=s.get("x"),o=s.get("y"),h=.2;s._prevtime=(new Date).getTime(),s.show(),a!==r&&(i=a/1+(t-a)*h,n=o/1+(l-o)*h);var c=s.getInstance(),u=s._cfg,f=s._cfg.anim,d=s.getPos(i,n),p=(u.corner.css["margin-top"]||u.corner.css.marginTop||0,u.corner.css["margin-left"]||u.corner.css.marginLeft||0),g=s.$corner;g&&g.css({"margin-left":p+t-d.x}),c.css({"margin-top":d.y,"margin-left":d.x});var x=s.getPos(t,l);c.stop().animate({"margin-top":x.y,"margin-left":x.x},f.duration,f.easing,function(){e&&e()})},renderTemplate:function(t,l){return this.setContent(e(t).render(l))},setContent:function(t){return n("."+this._cfg.clsName+"-tip-content",this.$tip).html(t)},getPos:function(t,l){var e=this,r=e._cfg,i=r.offset,n=l+i.y,s=t+i.x,a=r.alignX,o=r.alignY,h=e.getInstance(),c=h.outerWidth(),u=h.outerHeight(),f=r.boundry;switch(e.set("x",t||0),e.set("y",l||0),a){case"center":s=Math.round(t)+i.x-c/2;break;case"right":s=Math.round(t)+i.x-c}switch(o){case"middle":n=Math.round(l)+i.y-u/2;break;case"bottom":n=Math.round(l)+i.y-u}if(f.width&&f.height){var d=f.x||0,p=f.y||0,g=f.width,x=f.height;p>n?n=l- -Math.abs(i.y):n>p+x-u&&(n=l-u-Math.abs(i.y)),d>s?s=t- -Math.abs(i.x):s>d+g-c&&(s=t-c-Math.abs(i.x))}return{x:s,y:n}},_isExist:function(){return this.$tip&&this.$tip[0]},render:function(){var t=this,l=t._cfg,e=t._tpl,i=t._data,s=l.isVisable?"inline-block":"none",a=l.rootNode.offset();if(l.rootNode.offset())return t.$tip=!t._isExist()&&n('<span class="'+l.clsName+'-tip" style="*zoom:1;"><span class="'+l.clsName+'-tip-content"></span></span>').css({display:s}).appendTo(l.rootNode),t.$corner=l.corner.isShow&&l.corner.tpl?n("<div class='"+l.clsName+"-corner'>"+l.corner.tpl+"</div>").css(l.corner.css).appendTo(t.$tip):r,t.$tip.css({"margin-top":a.top+l.offset.y,"margin-left":a.left+l.offset.x,position:"absolute"}),t.renderTemplate(e,i),t.$tip}}),t.KCharts&&t.KCharts.Tip||t.namespace("KISSY.KCharts"),t.KCharts.Tip=i,i},{requires:["base","gallery/template/1.0/index","./assets/tip.css"]});