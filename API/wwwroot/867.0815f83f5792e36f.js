"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[867],{4867:(it,M,d)=>{d.r(M),d.d(M,{SupplierModule:()=>g});var p=d(6895),s=d(207),t=d(1571),P=d(5085),m=d(8734),U=d(8714);const y=["search"],S=function(o){return["edit",o]};function w(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._UZ(11,"i",13),t.qZA(),t.TgZ(12,"td")(13,"i",14),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.deleteProduct(n.id))}),t.qZA()()()}if(2&o){const e=u.$implicit;t.xp6(2),t.s9C("src",e.pictureUrl||"/assets/images/placeholder.png",t.LSH),t.s9C("alt",e.name),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(t.lcZ(7,6,e.price)),t.xp6(3),t.Oqu(e.creatorName),t.xp6(2),t.Q6J("routerLink",t.VKq(8,S,e.id))}}function J(o,u){if(1&o&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"a",4),t._uU(4,"\u0625\u0636\u0627\u0641\u0629 \u0645\u0646\u062a\u062c"),t.qZA()(),t.TgZ(5,"div",5),t._UZ(6,"app-paging-header",6),t.qZA()(),t.TgZ(7,"div",7)(8,"div",8)(9,"div",9)(10,"table",10)(11,"thead")(12,"tr")(13,"th"),t._uU(14,"\u0627\u0644\u0645\u0646\u062a\u062c"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"\u0627\u0644\u0627\u0633\u0645"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"\u0627\u0644\u0633\u0639\u0631"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"\u0627\u0644\u0645\u0646\u0634\u0626"),t.qZA(),t._UZ(21,"th"),t.qZA()(),t.TgZ(22,"tbody"),t.YNc(23,w,14,10,"tr",11),t.qZA()()()()()()),2&o){const e=t.oxw();t.xp6(6),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),t.xp6(17),t.Q6J("ngForOf",e.products)}}class h{constructor(u,e){this.shopService=u,this.adminService=e,this.shopParams=this.shopService.getShopParams()}ngOnInit(){const u=localStorage.getItem("userId");u&&this.adminService.getSupplierProducts(u).subscribe(e=>{this.products=e.data,this.totalCount=e.count},e=>{console.log(e)})}deleteProduct(u){this.adminService.deleteProduct(u).subscribe(e=>{this.products.splice(this.products.findIndex(i=>i.id===u),1),this.totalCount--})}}h.\u0275fac=function(u){return new(u||h)(t.Y36(P.d),t.Y36(m.l))},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-supplier-products-list"]],viewQuery:function(u,e){if(1&u&&t.Gf(y,5),2&u){let i;t.iGM(i=t.CRH())&&(e.searchTerm=i.first)}},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"col-6"],["routerLink","create-product",1,"btn","btn-primary","btn-sm"],[1,"col-6","text-end"],[3,"totalCount","pageSize","pageNumber"],[1,"row","mt-2"],[1,"col-12"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"img-fluid","product-img",3,"src","alt"],[1,"fa","fa-pencil",2,"font-size","1.4em","cursor","pointer","color","darkgray",3,"routerLink"],[1,"fa","fa-trash",2,"font-size","1.4em","cursor","pointer","color","darkgray",3,"click"]],template:function(u,e){1&u&&t.YNc(0,J,24,4,"div",0),2&u&&t.Q6J("ngIf",e.products)},dependencies:[p.sg,p.O5,s.rH,U.U,p.H9],styles:[".product-img[_ngcontent-%COMP%]{width:100px;height:100px;border:2px solid #ddd;object-fit:cover;border-radius:5px}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#333}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#f8f9fa}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even){background-color:#fff}"]});class f{}f.\u0275fac=function(u){return new(u||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-supplier-product-details"]],decls:2,vars:0,template:function(u,e){1&u&&(t.TgZ(0,"p"),t._uU(1,"supplier-product-details works!"),t.qZA())}});class Z{}Z.\u0275fac=function(u){return new(u||Z)},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["app-supplier-interface"]],decls:45,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-lg-2","col-md-3","col-sm-4","d-none","d-sm-block"],[1,"list-unstyled","full-height"],[1,"li-with-border"],[1,"mt-3","ms-2","font-weight-bold"],[1,""],["routerLink","supplier-dashboard","routerLinkActive","active"],["aria-hidden","true",1,"fa","fa-tachometer","gray-icon"],[1,"menu-text"],["routerLink","supplier-all-orders"],["aria-hidden","true",1,"fa","fa-list-alt","gray-icon"],["routerLink","supplier-product-list"],["aria-hidden","true",1,"fa","fa-building","gray-icon"],[1,"col-lg-10","col-md-9","col-sm-8"],[1,"row","pt-3","pb-3"],[1,"text-center"],[1,"text-shadow"],[1,"menu-container","d-sm-none"],[1,"list-unstyled"],[1,"custom-list-item"],[1,"menu-container"]],template:function(u,e){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav")(4,"ul",3)(5,"li",4)(6,"a")(7,"h3",5),t._uU(8," \u0627\u0644\u0642\u0627\u0626\u0645\u0629"),t.qZA()()(),t.TgZ(9,"li",6)(10,"a",7),t._UZ(11,"i",8),t.TgZ(12,"span",9),t._uU(13," \u0627\u0644\u0625\u062d\u0635\u0627\u0621\u0627\u062a"),t.qZA()()(),t.TgZ(14,"li")(15,"a",10),t._UZ(16,"i",11),t.TgZ(17,"span",9),t._uU(18,"\u0627\u0644\u0637\u0644\u0628\u0627\u062a"),t.qZA()()(),t.TgZ(19,"li")(20,"a",12),t._UZ(21,"i",13),t.TgZ(22,"span",9),t._uU(23,"\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"),t.qZA()()()()()(),t.TgZ(24,"div",14)(25,"div",15)(26,"div",16)(27,"h1",17),t._uU(28,"\u0644\u0648\u062d\u0629 \u0627\u0644\u0645\u0648\u0631\u062f"),t.qZA(),t.TgZ(29,"div",18)(30,"ul",19)(31,"li",20)(32,"a",7),t._UZ(33,"i",8),t._uU(34," \u0627\u0644\u0625\u062d\u0635\u0627\u0621\u0627\u062a "),t.qZA()(),t.TgZ(35,"li",20)(36,"a",10),t._UZ(37,"i",11),t._uU(38," \u0627\u0644\u0637\u0644\u0628\u0627\u062a "),t.qZA()(),t.TgZ(39,"li",20)(40,"a",12),t._UZ(41,"i",13),t._uU(42," \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a "),t.qZA()()()(),t.TgZ(43,"div",21),t._UZ(44,"router-outlet"),t.qZA()()()()()())},dependencies:[s.lC,s.rH,s.Od],styles:[".list-unstyled[_ngcontent-%COMP%]{position:relative;box-shadow:2px 0 5px #0003,0 0 5px #0000001a;margin-bottom:20px}.list-unstyled[_ngcontent-%COMP%]:hover{color:#fff}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;padding-top:10px;padding-bottom:10px;font-weight:700}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;text-decoration:none;display:flex;align-items:center}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px;font-size:20px}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#bf9553;font-weight:700}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;text-decoration:none;transition:color .3s}.li-with-border[_ngcontent-%COMP%]{border-bottom:1px solid #dcdcdc;box-shadow:0 2px 4px #0000001a}.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%]{font-size:14px;margin-right:10px;color:#4e4e4e}.text-shadow[_ngcontent-%COMP%]{text-shadow:2px 2px 4px rgba(0,0,0,.5);color:#4e4e4e}.full-height[_ngcontent-%COMP%]{height:100vh}.small-button[_ngcontent-%COMP%]{font-size:14px;margin:8px}.menu-container[_ngcontent-%COMP%]{padding:10px;border-bottom:1px solid #dcdcdc;box-shadow:0 2px 4px #0000001a}.gray-icon[_ngcontent-%COMP%]{color:#4e4e4e}.btn[_ngcontent-%COMP%]:focus   .gray-icon[_ngcontent-%COMP%]{color:#fff}.btn[_ngcontent-%COMP%]:active   .gray-icon[_ngcontent-%COMP%], .btn.custom-button[_ngcontent-%COMP%]:hover, .btn.custom-button[_ngcontent-%COMP%]:hover   .gray-icon[_ngcontent-%COMP%]{color:#fff}"]});class C{constructor(u,e){this.adminService=u,this.shopService=e,this.products=[],this.totalCount=0,this.totalUsersCount=0}ngOnInit(){this.adminService.getTotalUsersCount("").subscribe(u=>{this.totalUsersCount=u,this.getProducts(),this.getTotalOrders()})}getProducts(u=!1){this.shopService.getProducts(u).subscribe(e=>{this.products=e.data,this.totalCount=e.count},e=>{console.log(e)})}getTotalOrders(){this.adminService.getAllOrders().subscribe(u=>{this.totalOrders=u.totalCount},u=>{console.error(u)})}}C.\u0275fac=function(u){return new(u||C)(t.Y36(m.l),t.Y36(P.d))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-supplier-dashboard"]],decls:18,vars:0,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card"],[1,"card-body","text-center"],[1,"card-title"],[1,"icon","icon-rose"],[1,"material-icons"],[1,"icon","icon-success"]],template:function(u,e){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),t._uU(6,"\u0625\u062c\u0645\u0627\u0644\u064a \u0637\u0644\u0628\u0627\u062a"),t.qZA(),t.TgZ(7,"div",6)(8,"span",7),t._uU(9,"shopping_cart"),t.qZA()()()()(),t.TgZ(10,"div",2)(11,"div",3)(12,"div",4)(13,"h5",5),t._uU(14,"\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a"),t.qZA(),t.TgZ(15,"div",8)(16,"span",7),t._uU(17,"attach_money"),t.qZA()()()()()()())},styles:[".card[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:0;border-top:1px solid rgba(0,0,0,.1);box-shadow:0 2px 4px #0000001a}.card-body[_ngcontent-%COMP%]{margin-top:-1px;padding-top:1rem}.icon.icon-warning[_ngcontent-%COMP%]{color:#ff9800}.icon.icon-rose[_ngcontent-%COMP%]{color:#e91e63}.icon.icon-success[_ngcontent-%COMP%]{color:#4caf50}.icon.icon-info[_ngcontent-%COMP%]{color:#00bcd4}@media (max-width: 767px){.card-text[_ngcontent-%COMP%]{font-size:14px}}"]});var b=d(5986),I=d(6170),F=d.n(I),O=d(307),c=d(4006);function k(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function D(o,u){if(1&o&&(t.TgZ(0,"div",39),t.YNc(1,k,2,0,"div",33),t.qZA()),2&o){t.oxw();const e=t.MAs(9);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function N(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Q(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0642\u064a\u0645\u0629 \u0639\u0634\u0631\u064a\u0629 "),t.qZA())}function Y(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 "),t.qZA())}function L(o,u){if(1&o&&(t.TgZ(0,"div",39),t.YNc(1,N,2,0,"div",33),t.YNc(2,Q,2,0,"div",33),t.YNc(3,Y,2,0,"div",33),t.qZA()),2&o){t.oxw();const e=t.MAs(16);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.pattern),t.xp6(1),t.Q6J("ngIf",e.errors.min)}}function j(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," (English) \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function E(o,u){if(1&o&&(t.TgZ(0,"div",39),t.YNc(1,j,2,0,"div",33),t.qZA()),2&o){t.oxw();const e=t.MAs(24);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}function z(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function B(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0642\u064a\u0645\u0629 \u0639\u0634\u0631\u064a\u0629 "),t.qZA())}function H(o,u){1&o&&(t.TgZ(0,"div"),t._uU(1," \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0633\u0639\u0631 \u0627\u0644\u0645\u0646\u062a\u062c \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 "),t.qZA())}function K(o,u){if(1&o&&(t.TgZ(0,"div",39),t.YNc(1,z,2,0,"div",33),t.YNc(2,B,2,0,"div",33),t.YNc(3,H,2,0,"div",33),t.qZA()),2&o){t.oxw();const e=t.MAs(31);t.xp6(1),t.Q6J("ngIf",e.errors.required),t.xp6(1),t.Q6J("ngIf",e.errors.pattern),t.xp6(1),t.Q6J("ngIf",e.errors.min)}}function $(o,u){if(1&o&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&o){const e=u.$implicit,i=t.oxw();t.Q6J("selected",i.product.productBrandId===e.id)("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function V(o,u){if(1&o&&(t.TgZ(0,"option",40),t._uU(1),t.qZA()),2&o){const e=u.$implicit,i=t.oxw();t.Q6J("selected",i.product.productTypeId===e.id)("ngValue",e.id),t.xp6(1),t.Oqu(e.name)}}function X(o,u){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" \u0639\u062f\u062f \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u062d\u062f\u062f\u0629: ",e.numberOfFiles,"")}}function G(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",41)(1,"div",42),t._UZ(2,"img",43),t.TgZ(3,"div",44)(4,"span",45),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.cancelUpload(n))}),t.qZA()()()()}if(2&o){const e=u.$implicit;t.xp6(2),t.Q6J("src",e,t.LSH)}}const A=function(o){return{"is-invalid":o}},R=function(){return{placeholder:"\u0648\u0635\u0641 \u0627\u0644\u0645\u0646\u062a\u062c...",language:"ar"}};class x{constructor(u,e,i,r){this.route=u,this.adminService=e,this.router=i,this.shopService=r,this.selectedPhotos=[],this.numberOfFiles=0,this.Editor=F()}ngOnInit(){this.product={name:"",nameEn:"",oldPrice:0,price:0,description:"",pictureUrl:"",productTypeId:0,productBrandId:0,photos:[]},this.loadBrands(),this.loadTypes()}onSubmit(u){const e={...u,price:+u.price};this.adminService.createProduct(e,this.product.photos).subscribe(i=>{this.router.navigate(["/supplier/supplier-product-list"])})}onPhotoChange(u){this.numberOfFiles=u.target.files.length,this.product.photos=Array.from(u.target.files),this.selectedPhotos=[];for(let i=0;i<this.product.photos.length;i++){const r=new FileReader;r.onload=n=>{this.selectedPhotos.push(n.target.result)},r.readAsDataURL(this.product.photos[i])}}drop(u){if(u.previousContainer===u.container)(0,b.bA)(this.selectedPhotos,u.previousIndex,u.currentIndex);else{const e=this.selectedPhotos[u.previousIndex];this.selectedPhotos.splice(u.previousIndex,1),this.selectedPhotos.splice(u.currentIndex,0,e)}}cancelUpload(u){const e=this.selectedPhotos.indexOf(u);-1!==e&&(this.selectedPhotos.splice(e,1),this.numberOfFiles--)}loadBrands(){this.shopService.getBrands().subscribe(u=>{this.brands=u})}loadTypes(){this.shopService.getTypes().subscribe(u=>{this.types=u})}}function W(o,u){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA()()),2&o){const e=u.$implicit;t.xp6(2),t.Oqu(e.productName),t.xp6(2),t.Oqu(e.supplierId),t.xp6(2),t.Oqu(t.lcZ(7,4,e.price)),t.xp6(3),t.Oqu(e.quantity)}}function tt(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"button",4),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.goBack())}),t._uU(4,"\u0631\u062c\u0648\u0639"),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"h4"),t._uU(9,"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0637\u0644\u0628"),t.qZA()(),t.TgZ(10,"ul",8)(11,"li",9)(12,"strong"),t._uU(13,"\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"li",9)(16,"strong"),t._uU(17,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0644\u0644\u0645\u0634\u062a\u0631\u064a:"),t.qZA(),t._uU(18),t.qZA(),t.TgZ(19,"li",9)(20,"strong"),t._uU(21,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0637\u0644\u0628:"),t.qZA(),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"li",9)(25,"strong"),t._uU(26,"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0634\u062d\u0646:"),t.qZA(),t.TgZ(27,"ul",10)(28,"li")(29,"strong"),t._uU(30,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644:"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"li")(33,"strong"),t._uU(34,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u062e\u064a\u0631:"),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"li")(37,"strong"),t._uU(38,"\u0627\u0644\u0634\u0627\u0631\u0639:"),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"li")(41,"strong"),t._uU(42,"\u0627\u0644\u0645\u062f\u064a\u0646\u0629:"),t.qZA(),t._uU(43),t.qZA(),t.TgZ(44,"li")(45,"strong"),t._uU(46,"\u0627\u0644\u062f\u0648\u0644\u0629:"),t.qZA(),t._uU(47),t.qZA(),t.TgZ(48,"li")(49,"strong"),t._uU(50,"\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064a\u062f\u064a:"),t.qZA(),t._uU(51),t.qZA()()(),t.TgZ(52,"li",9)(53,"strong"),t._uU(54,"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u0648\u0635\u064a\u0644:"),t.qZA(),t._uU(55),t.qZA(),t.TgZ(56,"li",9)(57,"strong"),t._uU(58,"\u0633\u0639\u0631 \u0627\u0644\u0634\u062d\u0646:"),t.qZA(),t._uU(59),t.ALo(60,"currency"),t.qZA()()()(),t.TgZ(61,"div",5)(62,"div",6)(63,"div",7)(64,"h4"),t._uU(65,"\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0637\u0644\u0628"),t.qZA()(),t.TgZ(66,"div",11)(67,"table",12)(68,"thead")(69,"tr")(70,"th"),t._uU(71,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"),t.qZA(),t.TgZ(72,"th"),t._uU(73,"supplierId"),t.qZA(),t.TgZ(74,"th"),t._uU(75,"\u0627\u0644\u0633\u0639\u0631"),t.qZA(),t.TgZ(76,"th"),t._uU(77,"\u0627\u0644\u0643\u0645\u064a\u0629"),t.qZA()()(),t.TgZ(78,"tbody"),t.YNc(79,W,10,6,"tr",13),t.qZA()()(),t.TgZ(80,"div",14)(81,"p")(82,"strong"),t._uU(83,"\u0627\u0644\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0641\u0631\u0639\u064a:"),t.qZA(),t._uU(84),t.ALo(85,"currency"),t.qZA(),t.TgZ(86,"p")(87,"strong"),t._uU(88,"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639:"),t.qZA(),t._uU(89),t.qZA(),t.TgZ(90,"p")(91,"strong"),t._uU(92,"\u0627\u0644\u0645\u062c\u0645\u0648\u0639:"),t.qZA(),t._uU(93),t.ALo(94,"currency"),t.qZA(),t.TgZ(95,"p")(96,"strong"),t._uU(97,"\u0627\u0644\u062d\u0627\u0644\u0629:"),t.qZA(),t._uU(98),t.qZA()()()()()()}if(2&o){const e=t.oxw();t.xp6(14),t.hij(" ",e.order.id,""),t.xp6(4),t.hij(" ",e.order.buyerEmail,""),t.xp6(4),t.hij(" ",t.lcZ(23,16,e.order.orderDate),""),t.xp6(9),t.hij(" ",e.order.shipToAddress.firstName,""),t.xp6(4),t.hij(" ",e.order.shipToAddress.lastName,""),t.xp6(4),t.hij(" ",e.order.shipToAddress.street,""),t.xp6(4),t.hij(" ",e.order.shipToAddress.city,""),t.xp6(4),t.hij(" ",e.order.shipToAddress.state,""),t.xp6(4),t.hij(" ",e.order.shipToAddress.zipCode,""),t.xp6(4),t.hij(" ",e.order.deliveryMethod,""),t.xp6(4),t.hij(" ",t.lcZ(60,18,e.order.shippingPrice),""),t.xp6(20),t.Q6J("ngForOf",e.order.orderItems),t.xp6(5),t.hij(" ",t.lcZ(85,20,e.order.subtotal),""),t.xp6(5),t.hij(" ",e.order.paymentMethod,""),t.xp6(4),t.hij(" ",t.lcZ(94,22,e.order.total),""),t.xp6(5),t.hij(" ",e.order.status,"")}}x.\u0275fac=function(u){return new(u||x)(t.Y36(s.gz),t.Y36(m.l),t.Y36(s.F0),t.Y36(P.d))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-supplier-product-create"]],inputs:{product:"product",types:"types"},decls:66,vars:36,consts:[[1,"container"],["enctype","multipart/form-data",3,"ngSubmit"],["productForm","ngForm"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","name"],["required","","type","text","id","name","name","name",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["name","ngModel"],["class","invalid-feedback",4,"ngIf"],["for","price"],["required","","type","text","id","price","name","price","pattern","^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9][0-9])?$",1,"form-control",3,"ngClass","min","ngModel","ngModelChange"],["price","ngModel"],["for","nameEn"],["required","","type","text","id","nameEn","name","nameEn",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["nameEn","ngModel"],["for","oldPrice"],["type","text","id","oldPrice","name","oldPrice","pattern","^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9][0-9])?$",1,"form-control",3,"ngClass","min","ngModel","ngModelChange"],["oldPrice","ngModel"],["required","","name","description",3,"editor","config","ngClass","ngModel","ngModelChange"],["description","ngModel"],[1,"row","mt-2"],["for","brand"],["id","brand","name","productBrandId","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"selected","ngValue",4,"ngFor","ngForOf"],["for","type"],["id","type","name","productTypeId","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group","mt-2"],[1,"custom-file-upload"],["type","file","id","photos","name","photos","multiple","","accept","image/*",2,"display","none",3,"change"],["for","photos",1,"btn","btn-primary","btn-sm"],[1,"fa","fa-plus"],[1,"fa","fa-camera"],[4,"ngIf"],[1,"container","dragdrop"],[1,"col-12","custom-col"],["cdkDropList","",1,"image-container",3,"cdkDropListDropped"],["class","image-wrapper","cdkDrag","",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary","btn-sm","my-3",3,"disabled"],[1,"invalid-feedback"],[3,"selected","ngValue"],["cdkDrag","",1,"image-wrapper"],[1,"image-inner-wrapper"],[1,"img-fluid",3,"src"],[1,"image-close"],[1,"fa","fa-times",3,"click"]],template:function(u,e){if(1&u){const i=t.EpF();t.TgZ(0,"div",0)(1,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(i);const n=t.MAs(2);return t.KtG(e.onSubmit(n.valid&&n.value))}),t.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),t._uU(7,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"),t.qZA(),t.TgZ(8,"input",7,8),t.NdJ("ngModelChange",function(n){return e.product.name=n}),t.qZA(),t.YNc(10,D,2,1,"div",9),t.qZA()(),t.TgZ(11,"div",4)(12,"div",5)(13,"label",10),t._uU(14,"\u0627\u0644\u0633\u0639\u0631"),t.qZA(),t.TgZ(15,"input",11,12),t.NdJ("ngModelChange",function(n){return e.product.price=n}),t.qZA(),t.YNc(17,L,4,3,"div",9),t.qZA()()(),t.TgZ(18,"div",3)(19,"div",4)(20,"div",5)(21,"label",13),t._uU(22," (English) \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062a\u062c"),t.qZA(),t.TgZ(23,"input",14,15),t.NdJ("ngModelChange",function(n){return e.product.nameEn=n}),t.qZA(),t.YNc(25,E,2,1,"div",9),t.qZA()(),t.TgZ(26,"div",4)(27,"div",5)(28,"label",16),t._uU(29,"\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0642\u062f\u064a\u0645"),t.qZA(),t.TgZ(30,"input",17,18),t.NdJ("ngModelChange",function(n){return e.product.oldPrice=n}),t.qZA(),t.YNc(32,K,4,3,"div",9),t.qZA()()(),t.TgZ(33,"div")(34,"div",5),t._UZ(35,"br"),t.TgZ(36,"ckeditor",19,20),t.NdJ("ngModelChange",function(n){return e.product.description=n}),t.qZA()()(),t.TgZ(38,"div",21)(39,"div",4)(40,"div",5)(41,"label",22),t._uU(42," \u0627\u0644\u0641\u0626\u0629"),t.qZA(),t.TgZ(43,"select",23),t.NdJ("ngModelChange",function(n){return e.product.productBrandId=n}),t.YNc(44,$,2,3,"option",24),t.qZA()()(),t.TgZ(45,"div",4)(46,"div",5)(47,"label",25),t._uU(48,"\u0627\u0644\u0646\u0648\u0639"),t.qZA(),t.TgZ(49,"select",26),t.NdJ("ngModelChange",function(n){return e.product.productTypeId=n}),t.YNc(50,V,2,3,"option",24),t.qZA()()()(),t.TgZ(51,"div",27)(52,"div",28)(53,"input",29),t.NdJ("change",function(n){return e.onPhotoChange(n)}),t.qZA(),t.TgZ(54,"label",30),t._UZ(55,"i",31)(56,"i",32),t._uU(57," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0648\u0631 "),t.qZA()(),t.YNc(58,X,2,1,"p",33),t.qZA(),t.TgZ(59,"div",34)(60,"div",3)(61,"div",35)(62,"div",36),t.NdJ("cdkDropListDropped",function(n){return e.drop(n)}),t.YNc(63,G,5,1,"div",37),t.qZA()()()(),t.TgZ(64,"button",38),t._uU(65,"\u062d\u0641\u0638"),t.qZA()()()}if(2&u){const i=t.MAs(2),r=t.MAs(9),n=t.MAs(16),a=t.MAs(24),_=t.MAs(31),q=t.MAs(37);t.xp6(8),t.Q6J("ngClass",t.VKq(25,A,r.invalid&&(r.dirty||r.touched)))("ngModel",e.product.name),t.xp6(2),t.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(27,A,n.invalid&&(n.dirty||n.touched)))("min",.01)("ngModel",e.product.price),t.xp6(2),t.Q6J("ngIf",n.invalid&&(n.dirty||n.touched)),t.xp6(6),t.Q6J("ngClass",t.VKq(29,A,a.invalid&&(a.dirty||a.touched)))("ngModel",e.product.nameEn),t.xp6(2),t.Q6J("ngIf",r.invalid&&(a.dirty||a.touched)),t.xp6(5),t.Q6J("ngClass",t.VKq(31,A,_.invalid&&(_.dirty||_.touched)))("min",.01)("ngModel",e.product.oldPrice),t.xp6(2),t.Q6J("ngIf",_.invalid&&(_.dirty||_.touched)),t.xp6(4),t.Q6J("editor",e.Editor)("config",t.DdM(33,R))("ngClass",t.VKq(34,A,q.invalid&&(q.dirty||q.touched)))("ngModel",e.product.description),t.xp6(7),t.Q6J("ngModel",e.product.productBrandId),t.xp6(1),t.Q6J("ngForOf",e.brands),t.xp6(5),t.Q6J("ngModel",e.product.productTypeId),t.xp6(1),t.Q6J("ngForOf",e.types),t.xp6(8),t.Q6J("ngIf",e.numberOfFiles>0),t.xp6(5),t.Q6J("ngForOf",e.selectedPhotos),t.xp6(1),t.Q6J("disabled",!i.valid)}},dependencies:[p.mk,p.sg,p.O5,O.u,b.Wj,b.Zt,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.Q7,c.c5,c.On,c.F],styles:[".image-container[_ngcontent-%COMP%]{border:1px solid #ccc;max-width:100%;overflow-x:auto;white-space:nowrap}.image-wrapper[_ngcontent-%COMP%]{width:100%;height:auto;margin-right:10px;background-color:#f5f5f5;border:1px solid #ddd;border-radius:4px;overflow:hidden;position:relative}.custom-col[_ngcontent-%COMP%]{padding-left:0!important;padding-right:0!important}.image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.dragdrop[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start}.image-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.image-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-basis:calc(10% - 10px);max-width:calc(10% - 10px);padding:5px;box-sizing:border-box}.image-inner-wrapper[_ngcontent-%COMP%]{flex-grow:1}.image-inner-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.image-close[_ngcontent-%COMP%]{position:absolute;top:3px;right:3px}.image-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;color:#fff;background-color:gray;border-radius:50%;padding:8px;cursor:pointer}.container.dragdrop[_ngcontent-%COMP%]{border:2px dotted #dcdcdc;padding-top:8px;padding-bottom:8px}.image-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:3px}.image-container-display[_ngcontent-%COMP%]{display:flex}@media (max-width: 768px){.image-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-basis:calc(58% - 26px);max-width:calc(40% - 72px)!important;box-sizing:border-box}.image-wrapper[_ngcontent-%COMP%]{width:100%;max-width:150px;height:auto;margin-right:10px;border:1px solid #ddd;border-radius:4px;overflow:hidden;position:relative}.container.dragdrop[_ngcontent-%COMP%]{border:2px dotted #dcdcdc;padding-top:2px;padding-bottom:2px}}input[_ngcontent-%COMP%]::file-selector-button{background-color:#bf9553;color:#fff}.ck.ck-editor__main[_ngcontent-%COMP%]   .ck-content[_ngcontent-%COMP%]{height:700px!important}.ck-editor__editable_inline[_ngcontent-%COMP%]{min-height:500px}.ck-editor__editable[_ngcontent-%COMP%]{min-height:150px!important;max-height:400px!important}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:150px}"]});class v{constructor(u,e,i){this.route=u,this.adminService=e,this.router=i}ngOnInit(){this.buyerEmail=this.route.snapshot.paramMap.get("email"),this.getUserDetails()}getUserDetails(){this.adminService.getUserOrderByEmail(this.buyerEmail).subscribe(u=>{this.order=u,console.log(this.order)},u=>{console.error(u)})}goBack(){this.router.navigate(["/supplier/supplier-all-orders"])}}v.\u0275fac=function(u){return new(u||v)(t.Y36(s.gz),t.Y36(m.l),t.Y36(s.F0))},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-supplier-order-details"]],decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row"],[1,"mb-2"],["type","button",1,"btn","btn-outline-secondary","btn-sm",3,"click"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"list-unstyled"],[1,"card-body"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"card-footer"]],template:function(u,e){1&u&&t.YNc(0,tt,99,24,"div",0),2&u&&t.Q6J("ngIf",e.order)},dependencies:[p.sg,p.O5,p.H9,p.uU]});const et=function(o){return["details",o]};function ut(o,u){if(1&o&&(t.TgZ(0,"tr")(1,"td",11),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td",11),t._uU(9),t.qZA(),t.TgZ(10,"td",11),t._uU(11),t.ALo(12,"currency"),t.qZA(),t.TgZ(13,"td",11),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"td",11),t._uU(17),t.ALo(18,"currency"),t.qZA(),t.TgZ(19,"td",11),t._uU(20),t.qZA(),t.TgZ(21,"td",11),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"i",13),t.qZA()()),2&o){const e=u.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.buyerEmail),t.xp6(2),t.Oqu(t.xi3(7,10,e.orderDate,"short")),t.xp6(3),t.Oqu(e.deliveryMethod),t.xp6(2),t.Oqu(t.Dn7(12,13,e.subtotal,"USD","symbol-narrow")),t.xp6(3),t.Oqu(t.Dn7(15,17,e.shippingPrice,"USD","symbol-narrow")),t.xp6(3),t.Oqu(t.Dn7(18,21,e.total,"USD","symbol-narrow")),t.xp6(3),t.Oqu(e.paymentMethod),t.xp6(2),t.Oqu(e.status),t.xp6(2),t.Q6J("routerLink",t.VKq(25,et,e.buyerEmail))}}class T{constructor(u){this.adminService=u,this.pageIndex=0,this.pageSize=10,this.totalCount=0,this.searchTerm=""}ngOnInit(){this.getOrders()}searchOrders(){this.pageIndex=0,this.getOrders()}onPageChanged(u){this.pageIndex=u,this.getOrders()}resetSearch(){this.searchTerm="",this.pageIndex=0,this.getOrders()}getOrders(){console.log("getOrders called");const u=localStorage.getItem("userId");u&&this.adminService.getAllOrdersForSupplier(u,this.pageIndex,this.pageSize,this.searchTerm).subscribe(e=>{console.log("Response from server:",e),this.orders=e.orders,this.totalCount=e.totalCount,console.log(this.orders)},e=>{this.errorMessage=e.message,console.error("Error in getOrders:",e)})}}T.\u0275fac=function(u){return new(u||T)(t.Y36(m.l))},T.\u0275cmp=t.Xpm({type:T,selectors:[["app-supplier-all-orders"]],decls:36,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-12","col-md-3"],[1,"input-group","mb-3"],["type","date","placeholder","\u0627\u0644\u0628\u062d\u062b \u062d\u0633\u0628 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u0639\u0631\u0648\u0636",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-search"],[1,"fa","fa-trash"],[1,"col-12"],[1,"table-responsive"],[1,"table","table-striped"],[1,"d-none","d-sm-table-cell"],[4,"ngFor","ngForOf"],[1,"fa","fa-eye",2,"font-size","1.4em","cursor","pointer","color","darkgray",3,"routerLink"]],template:function(u,e){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),t.NdJ("ngModelChange",function(r){return e.searchTerm=r}),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){return e.searchOrders()}),t._UZ(6,"i",6),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return e.resetSearch()}),t._UZ(8,"i",7),t.qZA()()(),t.TgZ(9,"div",8)(10,"div",9)(11,"table",10)(12,"thead")(13,"tr")(14,"th",11),t._uU(15,"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u062a\u0639\u0631\u064a\u0641\u064a"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"\u0628\u0631\u064a\u062f \u0627\u0644\u0645\u0634\u062a\u0631\u064a"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0637\u0644\u0628"),t.qZA(),t.TgZ(20,"th",11),t._uU(21,"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u0648\u0635\u064a\u0644"),t.qZA(),t.TgZ(22,"th",11),t._uU(23,"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0641\u0631\u0639\u064a"),t.qZA(),t.TgZ(24,"th",11),t._uU(25,"\u0633\u0639\u0631 \u0627\u0644\u0634\u062d\u0646"),t.qZA(),t.TgZ(26,"th",11),t._uU(27,"\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a"),t.qZA(),t.TgZ(28,"th",11),t._uU(29,"\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062f\u0641\u0639"),t.qZA(),t.TgZ(30,"th",11),t._uU(31,"\u0627\u0644\u062d\u0627\u0644\u0629"),t.qZA(),t._UZ(32,"th"),t.qZA()(),t.TgZ(33,"tbody"),t.YNc(34,ut,25,27,"tr",12),t.qZA()()()(),t._UZ(35,"div",8),t.qZA()()),2&u&&(t.xp6(4),t.Q6J("ngModel",e.searchTerm),t.xp6(30),t.Q6J("ngForOf",e.orders))},dependencies:[p.sg,s.rH,c.Fj,c.JJ,c.On,p.H9,p.uU]});const ot=[{path:"",component:Z,children:[{path:"",redirectTo:"supplier-dashboard",pathMatch:"full"},{path:"supplier-dashboard",component:C,data:{breadcrumb:{skip:!1,label:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0627\u062d\u0635\u0627\u0626\u0627\u062a"}}},{path:"supplier-all-orders",component:T},{path:"supplier-product-list",component:h},{path:"supplier-all-orders/details/:email",component:v},{path:"suppliers/:id",component:f},{path:"supplier-product-list/create-product",component:x}]}];class l{}l.\u0275fac=function(u){return new(u||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[s.Bz.forChild(ot),s.Bz]});var nt=d(3729),rt=d(4333);class g{}g.\u0275fac=function(u){return new(u||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[p.ez,l,rt.JX,O.d,b._t,nt.m]})}}]);