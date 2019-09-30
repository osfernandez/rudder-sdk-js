var analytics=function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function n(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){return t&&""!=t?t:void 0}function l(){let e=(new Date).getTime();return"undefined"!=typeof performance&&"function"==typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){let r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)}))}let a={TRACK:"track",PAGE:"page",IDENTIFY:"identify"},u={PRODUCTS_SEARCHED:"Products Searched",PRODUCT_LIST_VIEWED:"Product List Viewed",PRODUCT_LIST_FILTERED:"Product List Filtered",PROMOTION_VIEWED:"Promotion Viewed",PROMOTION_CLICKED:"Promotion Clicked",PRODUCT_CLICKED:"Product Clicked",PRODUCT_VIEWED:"Product Viewed",PRODUCT_ADDED:"Product Added",PRODUCT_REMOVED:"Product Removed",CART_VIEWED:"Cart Viewed",CHECKOUT_STARTED:"Checkout Started",CHECKOUT_STEP_VIEWED:"Checkout Step Viewed",CHECKOUT_STEP_COMPLETED:"Checkout Step Completed",PAYMENT_INFO_ENTERED:"Payment Info Entered",ORDER_UPDATED:"Order Updated",ORDER_COMPLETED:"Order Completed",ORDER_REFUNDED:"Order Refunded",ORDER_CANCELLED:"Order Cancelled",COUPON_ENTERED:"Coupon Entered",COUPON_APPLIED:"Coupon Applied",COUPON_DENIED:"Coupon Denied",COUPON_REMOVED:"Coupon Removed",PRODUCT_ADDED_TO_WISHLIST:"Product Added to Wishlist",PRODUCT_REMOVED_FROM_WISHLIST:"Product Removed from Wishlist",WISH_LIST_PRODUCT_ADDED_TO_CART:"Wishlist Product Added to Cart",PRODUCT_SHARED:"Product Shared",CART_SHARED:"Cart Shared",PRODUCT_REVIEWED:"Product Reviewed"},c="http://18.222.145.124:5000/dump",h=30,d=5e3;var _={HS:function(){function e(t){r(this,e),this.hubId=t}return i(e,[{key:"init",value:function(){!function(e,t){console.log("in script loader=== "+e);var r=document.createElement("script");r.src=t,r.type="text/javascript",r.id=e;var s=document.getElementsByTagName("script")[0];console.log("==script==",s),s.parentNode.insertBefore(r,s)}("hubspot-integration","http://js.hs-scripts.com/"+this.hubId+".js"),console.log("===in init===")}},{key:"identify",value:function(e){console.log("in HubspotAnalyticsManager identify");var r=e.rl_message.rl_context.rl_traits,s={};for(var i in r){if(Object.getOwnPropertyDescriptor(r,i)&&r[i])s[i.startsWith("rl_")?i.substring(3,i.length):i]=r[i]}if(s.address){var n=s.address;for(var o in delete s.address,n)if(Object.getOwnPropertyDescriptor(n,o)&&n[o]){var l=o.startsWith("rl_")?o.substring(3,o.length):o;s[l="street"==l?"address":l]=n[o]}}var a=e.rl_message.rl_context.rl_user_properties;for(var u in a){if(Object.getOwnPropertyDescriptor(a,u)&&a[u])s[u.startsWith("rl_")?u.substring(3,u.length):u]=a[u]}(console.log(s),void 0!==("undefined"==typeof window?"undefined":t(window)))&&(window._hsq=window._hsq||[]).push(["identify",s])}},{key:"track",value:function(e){console.log("in HubspotAnalyticsManager track");var t=window._hsq=window._hsq||[],r={};r.id=e.rl_message.rl_event,e.rl_message.rl_properties&&e.rl_message.rl_properties.revenue&&(console.log("revenue: "+e.rl_message.rl_properties.revenue),r.value=e.rl_message.rl_properties.revenue),t.push(["trackEvent",r])}},{key:"page",value:function(e){console.log("in HubspotAnalyticsManager page");var t=window._hsq=window._hsq||[];e.rl_message.rl_properties&&e.rl_message.rl_properties.path&&t.push(["setPath",e.rl_message.rl_properties.path]),t.push(["trackPageView"])}},{key:"loaded",value:function(){return console.log("in hubspot isLoaded"),!(!window._hsq||window._hsq.push===Array.prototype.push)}}]),e}()};class p{constructor(){this.rl_build="1.0.0",this.rl_name="RudderLabs JavaScript SDK",this.rl_namespace="com.rudderlabs.javascript",this.rl_version="1.0.0"}}class g{constructor(){this.rl_name="RudderLabs JavaScript SDK",this.rl_version="1.0.0"}}class y{constructor(){this.rl_name="",this.rl_version=""}}class f{constructor(){this.rl_density=0,this.rl_width=0,this.rl_height=0}}class m{constructor(){this.rl_app=new p,this.rl_traits=null,this.rl_library=new g;let e=new y;e.rl_version="";let t=new f;"undefined"==typeof window?(t.rl_width=0,t.rl_height=0,t.rl_density=0,e.rl_version="",e.rl_name="",this.rl_user_agent=null,this.rl_locale=null):(t.rl_width=window.width,t.rl_height=window.height,t.rl_density=window.devicePixelRatio,this.rl_user_agent=navigator.userAgent,this.rl_locale=navigator.language||navigator.browserLanguage),this.screen=t,this.rl_device=null,this.rl_network=null}}class v{constructor(){this.rl_channel="web",this.rl_context=new m,this.rl_type=null,this.rl_action=null,this.rl_message_id=l().toString(),this.rl_timestamp=(new Date).getTime(),this.rl_anonymous_id=l().toString(),this.rl_user_id=null,this.rl_event=null,this.rl_properties={},this.rl_integrations={},this.rl_integrations.all=!0}getProperty(e){return this.rl_properties[e]}addProperty(e,t){this.rl_properties[e]=t}validateFor(e){if(!this.rl_properties)throw new Error("Key rl_properties is required");switch(e){case a.TRACK:if(!this.rl_event)throw new Error("Key rl_event is required for track event");if(this.rl_event in Object.values(u))switch(this.rl_event){case u.CHECKOUT_STEP_VIEWED:case u.CHECKOUT_STEP_COMPLETED:case u.PAYMENT_INFO_ENTERED:this.checkForKey("checkout_id"),this.checkForKey("step");break;case u.PROMOTION_VIEWED:case u.PROMOTION_CLICKED:this.checkForKey("promotion_id");break;case u.ORDER_REFUNDED:this.checkForKey("order_id")}else this.rl_properties.rl_category||(this.rl_properties.rl_category=this.rl_event);break;case a.PAGE:break;case a.SCREEN:if(!this.rl_properties.name)throw new Error("Key 'name' is required in rl_properties")}}checkForKey(e){if(!this.rl_properties[e])throw new Error("Key '"+e+"' is required in rl_properties")}}class E{constructor(){this.rl_message=new v}setType(e){this.rl_message.rl_type=e}setProperty(e){this.rl_message.rl_properties=e}setUserProperty(e){this.rl_message.rl_user_properties=e}setUserId(e){this.rl_message.rl_user_id=e}setEventName(e){this.rl_message.rl_event=e}updateTraits(e){this.rl_message.rl_context.rl_traits=e}getElementContent(){return this.rl_message}}class w{constructor(){this.rudderProperty=null,this.rudderUserProperty=null,this.event=null,this.userId=null,this.channel=null,this.type=null}setProperty(e){return this.rudderProperty=e,this}setPropertyBuilder(e){return this.rudderProperty=e.build(),this}setUserProperty(e){return this.rudderUserProperty=e,this}setUserPropertyBuilder(e){return this.rudderUserProperty=e.build(),this}setEvent(e){return this.event=e,this}setUserId(e){return this.userId=e,this}setChannel(e){return this.channel=e,this}setType(e){return this.type=e,this}build(){let e=new E;return e.setUserId(this.userId),e.setType(this.type),e.setEventName(this.event),e.setProperty(this.rudderProperty),e.setUserProperty(this.rudderUserProperty),e}}class I{constructor(){this.rl_address=null,this.rl_age=null,this.rl_birthday=null,this.rl_company=null,this.rl_createdat=null,this.rl_description=null,this.rl_email=null,this.rl_firstname=null,this.rl_gender=null,this.rl_id=null,this.rl_lastname=null,this.rl_name=null,this.rl_phone=null,this.rl_title=null,this.rl_username=null}setAddress(e){return this.rl_address=e,this}setAge(e){return this.rl_age=e,this}setBirthday(e){return this.rl_birthday=e,this}setCompany(e){return this.rl_company=e,this}setCreatedAt(e){return this.rl_createdat=e,this}setDescription(e){return this.rl_description=e,this}setEmail(e){return this.rl_email=e,this}setFirstname(e){return this.rl_firstname=e,this}setId(e){return this.rl_id=e,this}setLastname(e){return this.rl_lastname=e,this}setName(e){return this.rl_name=e,this}setPhone(e){return this.rl_phone=e,this}setTitle(e){return this.rl_title=e,this}setUsername(e){return this.rl_username=e,this}}let O={user_storage_key:"rl_user_id",user_storage_trait:"rl_trait"};var P=class{constructor(){this.storage=window.localStorage}setItem(e,t){let r="";"string"==typeof t&&(r=t),"object"==typeof t&&(r=JSON.stringify(t)),this.storage.setItem(e,r)}setUserId(e){"string"==typeof e?this.storage.setItem(O.user_storage_key,e):console.log("userId should be string")}setUserTraits(e){"object"==typeof e?this.storage.setItem(O.user_storage_trait,JSON.stringify(e)):console.log("traits should be object")}getItem(e){let t=this.storage.getItem(e);return JSON.parse(t)}getUserId(){return this.storage.getItem(O.user_storage_key)}getUserTraits(){return JSON.parse(this.storage.getItem(O.user_storage_trait))}removeItem(e){this.storage.removeItem(e)}clear(){this.storage.clear()}};class b{constructor(){this.batch=null,this.write_key=null}}let T=new class{constructor(){this.eventsBuffer=[],this.url=c,this.state="READY",setInterval(this.preaparePayloadAndFlush,d,this)}preaparePayloadAndFlush(e){if(console.log("==== in preaparePayloadAndFlush with state: "+e.state),console.log(e.eventsBuffer),0!=e.eventsBuffer.length&&"PROCESSING"!==e.state){var t=e.eventsBuffer.slice(0,h),r=new b;r.batch=t,r.write_key=e.write_key,r.sent_at=function(){let e=(new Date).toISOString();return e.split("T")[0]+" "+e.split("T")[1].split("Z")[0].split(".")[0]+"+"+e.split("Z")[0].split(".")[1]}();var s=new XMLHttpRequest;console.log("==== in flush sending to Rudder BE ===="),console.log(JSON.stringify(r,o).replace(/rl_/g,"")),s.open("POST",e.url,!0),s.setRequestHeader("Content-Type","application/json"),s.onreadystatechange=function(){4===s.readyState&&200===s.status?(console.log("====== request processed successfully: "+s.status),e.eventsBuffer=e.eventsBuffer.slice(h),console.log(e.eventsBuffer.length)):4===s.readyState&&200!==s.status&&console.log("====== request failed with status: "+s.status),e.state="READY"},s.send(JSON.stringify(r,o).replace(/rl_/g,"")),e.state="PROCESSING"}}flush(e){console.log(this.eventsBuffer),this.eventsBuffer.push(e.getElementContent()),console.log("==== Added to flush queue ====="+this.eventsBuffer.length)}};function D(e,t){var r=this;console.log("supported intgs ",_);if(this.clientIntegrationObjects=[],e&&0!=e.length){e.forEach((function(e){var s=_[e];if("HS"===e){t[0].hubId;"6405167";var i=new s("6405167");i.init(),r.clientIntegrationObjects.push(i)}}));for(var s=function(e){r.toBeProcessedByIntegrationArray.forEach((function(t){var s,i=t[0];t.shift(),(s=r.clientIntegrationObjects[e])[i].apply(s,n(t))}))},i=0;i<this.clientIntegrationObjects.length;i++)s(i);this.toBeProcessedByIntegrationArray=[]}else this.toBeProcessedByIntegrationArray=[]}function R(e){this.eventRepository||(this.eventRepository=T),this.eventRepository.flush(e)}var C=new(function(){function e(){r(this,e),this.prop1="val1",this.prop2="val2",this.ready=!1,this.writeKey="",this.eventsBuffer=[],this.clientIntegrations=[],this.configArray=[],this.clientIntegrationObjects=void 0,this.toBeProcessedArray=[],this.toBeProcessedByIntegrationArray=[],this.storage=new P,this.userId=null!=this.storage.getUserId()?this.storage.getUserId():l(),this.userTraits=null!=this.storage.getUserTraits()?this.storage.getUserTraits():{},this.storage.setUserId(this.userId),this.eventRepository=T}return i(e,[{key:"processResponse",value:function(e,t){(t=JSON.parse(t)).source.destinations.forEach((function(e,t){console.log("Destination "+t+" Enabled? "+e.enabled+" Type: "+e.destinationDefinition.name+" Use Native SDK? "+e.config.useNativeSDK),e.enabled&&e.config.useNativeSDK&&(this.clientIntegrations.push(e.destinationDefinition.name),this.configArray.push(e.config))}),this),D.call(this,this.clientIntegrations,this.configArray)}},{key:"page",value:function(e,r,s,i,n){var o=Array.from(arguments);console.log("args ",o),"function"==typeof i&&(n=i,i=null),"function"==typeof s&&(n=s,i=s=null),"function"==typeof r&&(n=r,i=s=r=null),"object"===t(e)&&(i=r,s=e,r=e=null),"object"===t(r)&&(i=s,s=r,r=null),"string"==typeof e&&"string"!=typeof r&&(r=e,e=null),this.userId||(this.userId=l(),this.storage.setUserId(this.userId));var a=(new w).setType("page").build();r&&(console.log("name ",r),a.rl_message.rl_name=r),e&&(s||(s={}),s.category=e),s&&(console.log(JSON.parse(JSON.stringify(s))),a.rl_message.rl_properties=s),a.rl_message.rl_context.rl_traits=this.userTraits,a.rl_message.rl_anonymous_id=a.rl_message.rl_user_id=a.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(a)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){e.page(a)})),this.clientIntegrationObjects||this.toBeProcessedByIntegrationArray.push(["page",a]),R.call(this,a),console.log("page called "+this.prop1),n&&n()}},{key:"track",value:function(e,t,r,s){"function"==typeof r&&(s=r,r=null),"function"==typeof t&&(s=t,r=null,t=null),this.userId||(this.userId=l(),this.storage.setUserId(this.userId));var i=(new w).setType("track").build();e&&i.setEventName(e),t&&i.setProperty(t),i.rl_message.rl_context.rl_traits=this.userTraits,i.rl_message.rl_anonymous_id=i.rl_message.rl_user_id=i.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(i)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){console.log("called in normal flow"),e.track(i)})),this.clientIntegrationObjects||(console.log("pushing in replay queue"),this.toBeProcessedByIntegrationArray.push(["track",i])),R.call(this,i),console.log("track is called "+this.prop2),s&&s()}},{key:"identify",value:function(e,r,s,i){"function"==typeof s&&(i=s,s=null),"function"==typeof r&&(i=r,s=null,r=null),"object"==t(e)&&(s=r,r=e,e=this.userId),this.userId=e,this.storage.setUserId(this.userId);var n=(new w).setType("identify").build(),o=new I;if(console.log(r),r)for(var l in r)Object.getOwnPropertyDescriptor(r,l)&&r[l]&&(o[l]=r[l]);this.userTraits=r,this.storage.setUserTraits(this.userTraits),n.rl_message.rl_context.rl_traits=this.userTraits,n.rl_message.rl_anonymous_id=n.rl_message.rl_user_id=n.rl_message.rl_context.rl_traits.rl_anonymous_id=this.userId,console.log(JSON.stringify(n)),this.clientIntegrationObjects&&this.clientIntegrationObjects.forEach((function(e){console.log("called in normal flow"),e.identify(n)})),this.clientIntegrationObjects||(console.log("pushing in replay queue"),this.toBeProcessedByIntegrationArray.push(["identify",n])),R.call(this,n),console.log("identify is called "+this.prop2),i&&i()}},{key:"reset",value:function(){this.userId="",this.userTraits={},this.storage.clear()}},{key:"load",value:function(e){console.log("inside load "+this.prop1),this.writeKey=e,function(e,t,r){let s=r.bind(e),i=new XMLHttpRequest;i.open("GET",t,!0),i.onload=function(){let e=i.status;200==e?(console.log("status 200"),s(200,i.responseText)):s(e),console.log("in response process")},console.log("before send"),i.send(),console.log("after send")}(this,"https://api.rudderlabs.com/source-config?write_key="+e,this.processResponse)}}]),e}()),S=!!window.analytics&&window.analytics.push==Array.prototype.push,A=window.analytics?window.analytics[0]:[];if(A.length>0&&"load"==A[0]&&C[A[0]](A[1]),S){for(var U=1;U<window.analytics.length;U++)C.toBeProcessedArray.push(window.analytics[U]);for(var k=0;k<C.toBeProcessedArray.length;k++){var x=n(C.toBeProcessedArray[k]),N=x[0];x.shift(),C[N].apply(C,n(x))}C.toBeProcessedArray=[]}var B=C.identify.bind(C),j=C.page.bind(C),K=C.track.bind(C),L=C.reset.bind(C),q=C.load.bind(C);return e.identify=B,e.load=q,e.page=j,e.reset=L,e.track=K,e}({});
