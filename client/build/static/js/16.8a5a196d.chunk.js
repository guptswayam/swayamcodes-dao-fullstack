(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[16],{1582:function(t,e,n){"use strict";n.r(e),n.d(e,"MetamaskAdapter",(function(){return k}));var r=n(1),a=n(8),i=n(6),s=n(7),c=n(9),o=n(51),h=n(35),u=n(11),d=n(12),p=n(15),l=n.n(p),m=n(600),b=n.n(m),f=n(13),k=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),l()(Object(c.a)(t),"adapterNamespace",f.c.EIP155),l()(Object(c.a)(t),"currentChainNamespace",f.f.EIP155),l()(Object(c.a)(t),"type",f.a.EXTERNAL),l()(Object(c.a)(t),"name",f.i.METAMASK),l()(Object(c.a)(t),"status",f.d.NOT_READY),l()(Object(c.a)(t),"rehydrated",!1),l()(Object(c.a)(t),"metamaskProvider",null),t.chainConfig=r.chainConfig||null,t}return Object(s.a)(n,[{key:"provider",get:function(){return this.status===f.d.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(o.a)(Object(h.a)(n.prototype),"checkInitializationRequirements",this).call(this),t.next=3,b()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=t.sent,this.metamaskProvider){t.next=6;break}throw f.j.notInstalled("Metamask extension is not installed");case 6:if(this.status=f.d.READY,this.emit(f.b.READY,f.i.METAMASK),t.prev=8,!e.autoConnect){t.next=13;break}return this.rehydrated=!0,t.next=13,this.connect();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),this.emit(f.b.ERRORED,t.t0);case 18:case"end":return t.stop()}}),t,this,[[8,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){}},{key:"connect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e=this;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(o.a)(Object(h.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(f.m)(f.f.EIP155,1)),this.status=f.d.CONNECTING,this.emit(f.b.CONNECTING,{adapter:f.i.METAMASK}),this.metamaskProvider){t.next=6;break}throw f.k.notConnectedError("Not able to connect with metamask");case 6:return t.prev=6,t.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){t.next=13;break}return t.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=f.d.CONNECTED,this.provider){t.next=16;break}throw f.k.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){e.disconnect()})),this.emit(f.b.CONNECTED,{adapter:f.i.METAMASK,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 21:throw t.prev=21,t.t0=t.catch(6),this.status=f.d.READY,this.rehydrated=!1,this.emit(f.b.ERRORED,t.t0),f.k.connectionError("Failed to login with metamask wallet");case 27:case"end":return t.stop()}}),t,this,[[6,21]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){var e,n,a=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},this.status===f.d.CONNECTED){t.next=3;break}throw f.k.disconnectionError("Not connected with wallet");case 3:null===(e=this.provider)||void 0===e||e.removeAllListeners(),n.cleanup?(this.status=f.d.NOT_READY,this.metamaskProvider=null):this.status=f.d.READY,this.rehydrated=!1,this.emit(f.b.DISCONNECTED);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===f.d.CONNECTED){t.next=2;break}throw f.k.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=Object(a.a)(Object(r.a)().mark((function t(e){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.metamaskProvider){t.next=2;break}throw f.k.notConnectedError("Not connected with wallet");case 2:return t.prev=2,t.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]});case 5:case 12:t.next=15;break;case 7:if(t.prev=7,t.t0=t.catch(2),4902!==t.t0.code){t.next=14;break}return t.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:e.chainId,chainName:e.displayName,rpcUrls:[e.rpcTarget]}]});case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(f.e)}}]);
//# sourceMappingURL=16.8a5a196d.chunk.js.map