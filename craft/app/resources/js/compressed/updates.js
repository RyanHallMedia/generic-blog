!function(a){var b=Garnish.Base.extend({totalAvailableUpdates:0,criticalUpdateAvailable:!1,allowAutoUpdates:null,init:function(){var b=a("#graphic"),c=a("#status");Craft.postActionRequest("update/getAvailableUpdates",a.proxy(function(d,e){if("success"!=e||d.error||d.errors){var f=Craft.t("An unknown error occurred.");d.errors&&d.errors.length?f=d.errors[0]:d.error&&(f=d.error),b.addClass("error"),c.text(f)}else{if(this.allowAutoUpdates=d.allowAutoUpdates,d.app&&this.processUpdate(d.app,!1),d.plugins&&d.plugins.length)for(var g=0;g<d.plugins.length;g++)this.processUpdate(d.plugins[g],!0);if(this.totalAvailableUpdates){b.remove(),c.remove();var h;h=1==this.totalAvailableUpdates?Craft.t("1 update available"):Craft.t("{num} updates available",{num:this.totalAvailableUpdates}),a('<div id="page-title"/>').appendTo(Craft.cp.$pageHeader).append(a("<h1/>").text(h))}else b.addClass("success"),c.text(Craft.t("You’re all up-to-date!"))}},this))},processUpdate:function(a,b){if(a.releases&&a.releases.length){this.totalAvailableUpdates++;new c(a,b)}}}),c=Garnish.Base.extend({updateInfo:null,isPlugin:null,displayName:null,manualUpdateRequired:null,$pane:null,$paneHeader:null,$downloadBtn:null,licenseHud:null,$licenseSubmitBtn:null,licenseSubmitAction:null,init:function(a,b){this.updateInfo=a,this.isPlugin=b,this.displayName=this.isPlugin?this.updateInfo.displayName:"Craft CMS",this.manualUpdateRequired=!d.allowAutoUpdates||this.updateInfo.manualUpdateRequired,this.createPane(),this.createHeading(),this.createDownloadButton(),this.createReleaseList()},createPane:function(){this.$pane=a('<div class="pane update"/>').appendTo(Craft.cp.$main),this.$paneHeader=a('<div class="header"/>').appendTo(this.$pane)},createHeading:function(){a("<h1/>",{class:"left",text:this.displayName}).appendTo(this.$paneHeader)},createDownloadButton:function(){var b,c=a('<div class="buttons right"/>').appendTo(this.$paneHeader);if(this.manualUpdateRequired)this.$downloadBtn=a('<div class="btn submit">'+Craft.t("Download")+"</div>").appendTo(c);else{var d=a('<div class="btngroup submit"/>').appendTo(c),e=a('<div class="btn submit menubtn"/>').appendTo(d),f=a('<div class="menu" data-align="right"/>').appendTo(d),g=a("<ul/>").appendTo(f),h=a("<li/>").appendTo(g);b=a('<div class="btn submit">'+Craft.t("Update")+"</div>").appendTo(d),this.$downloadBtn=a("<a>"+Craft.t("Download")+"</a>").appendTo(h),new Garnish.MenuBtn(e)}this.updateInfo.licenseUpdated?(this.addListener(this.$downloadBtn,"click","showLicenseForm"),this.manualUpdateRequired||this.addListener(b,"click","showLicenseForm")):(this.addListener(this.$downloadBtn,"click","downloadThat"),this.manualUpdateRequired||this.addListener(b,"click","autoUpdateThat"))},createReleaseList:function(){for(var a=0;a<this.updateInfo.releases.length;a++)new Release(this,this.updateInfo.releases[a])},showLicenseForm:function(b){if(b.stopPropagation(),this.licenseHud)this.licenseHud.$trigger=a(b.currentTarget),this.licenseHud.show();else{var c=a("<div><p>"+Craft.t('Craft’s <a href="http://craftcms.com/license" target="_blank">Terms and Conditions</a> have changed.')+"</p></div>"),d=a("<label> "+Craft.t("I agree.")+" &nbsp;</label>").appendTo(c),e=a('<input type="checkbox"/>').prependTo(d);this.$licenseSubmitBtn=a('<input class="btn submit" type="submit"/>').appendTo(c),this.licenseHud=new Garnish.HUD(b.currentTarget,c,{onSubmit:a.proxy(function(){e.prop("checked")?(this.licenseSubmitAction(),this.licenseHud.hide(),e.prop("checked",!1)):Garnish.shake(this.licenseHud.$hud)},this)})}b.currentTarget==this.$downloadBtn[0]?(this.$licenseSubmitBtn.attr("value",Craft.t("Seriously, download.")),this.licenseSubmitAction=this.downloadThat):(this.$licenseSubmitBtn.attr("value",Craft.t("Seriously, update.")),this.licenseSubmitAction=this.autoUpdateThat)},downloadThat:function(){window.location.href=this.updateInfo.manualDownloadEndpoint},autoUpdateThat:function(){window.location.href=Craft.getUrl("updates/go/"+(this.isPlugin?this.updateInfo.class.toLowerCase():"craft"))}});Release=Garnish.Base.extend({update:null,releaseInfo:null,$container:null,$releaseNotes:null,$showMoreLink:null,init:function(a,b){this.update=a,this.releaseInfo=b,this.createContainer(),this.createHeading(),this.createReleaseNotes()},createContainer:function(){this.$container=a('<div class="release"/>').appendTo(this.update.$pane)},createHeading:function(){var b=this.releaseInfo.version;this.releaseInfo.build&&(b+="."+this.releaseInfo.build),this.releaseInfo.critical&&(b+=' <span class="critical">'+Craft.t("Critical")+"</span>"),a("<h2/>",{html:b}).appendTo(this.$container),a("<p/>",{class:"release-date light",text:Craft.t("Released on {date}",{date:this.releaseInfo.localizedDate})}).appendTo(this.$container)},createReleaseNotes:function(){this.$releaseNotes=a('<div class="release-notes"/>').appendTo(this.$container).html(this.releaseInfo.notes);var b=this.$releaseNotes.children("ul").children().length;b>Release.maxInitialReleaseNotes&&(this.$releaseNotes.addClass("fade-out"),this.$showMoreLink=a("<a/>",{class:"show-full-notes",text:Craft.t("Show more")}).appendTo(this.$container),this.addListener(this.$showMoreLink,"click","showMoreReleaseNotes"))},showMoreReleaseNotes:function(){var b=this.$releaseNotes.height();this.$releaseNotes.css("max-height","none");var c=this.$releaseNotes.height();this.$releaseNotes.height(b).velocity({height:c},{duration:"fast",complete:a.proxy(function(){this.$releaseNotes.removeClass("fade-out").css("max-height",""),this.$showMoreLink.remove()},this)}),this.$showMoreLink.velocity({opacity:0,"margin-top":-18},{duration:"fast",complete:a.proxy(function(){this.$showMoreLink.remove()})})}},{maxInitialReleaseNotes:5});var d=new b}(jQuery);
//# sourceMappingURL=updates.js.map