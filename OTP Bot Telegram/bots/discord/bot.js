const _0xca9987=_0x5942;(function(_0x5f2d7e,_0x5c7632){const _0x5d292c=_0x5942,_0x3b14f1=_0x5f2d7e();while(!![]){try{const _0x38e8e7=-parseInt(_0x5d292c(0x1e4))/0x1*(parseInt(_0x5d292c(0x209))/0x2)+-parseInt(_0x5d292c(0x1f8))/0x3*(parseInt(_0x5d292c(0x200))/0x4)+parseInt(_0x5d292c(0x1f7))/0x5*(-parseInt(_0x5d292c(0x1ef))/0x6)+-parseInt(_0x5d292c(0x1e8))/0x7*(-parseInt(_0x5d292c(0x1f9))/0x8)+parseInt(_0x5d292c(0x20c))/0x9+-parseInt(_0x5d292c(0x1fe))/0xa*(-parseInt(_0x5d292c(0x1ee))/0xb)+parseInt(_0x5d292c(0x1fc))/0xc*(parseInt(_0x5d292c(0x20d))/0xd);if(_0x38e8e7===_0x5c7632)break;else _0x3b14f1['push'](_0x3b14f1['shift']());}catch(_0x31b11a){_0x3b14f1['push'](_0x3b14f1['shift']());}}}(_0x473e,0x92822));const Discord=require(_0xca9987(0x204)),client=new Discord[(_0xca9987(0x1f4))](),config=require('./config');client[_0xca9987(0x1ea)](config['discordtoken']);function _0x5942(_0x1861c6,_0x1814e0){const _0x473e0b=_0x473e();return _0x5942=function(_0x59420d,_0x558d8f){_0x59420d=_0x59420d-0x1df;let _0x495310=_0x473e0b[_0x59420d];return _0x495310;},_0x5942(_0x1861c6,_0x1814e0);}function _0x473e(){const _0x4b43d5=['32808HGhBQP','Permissions','./commands/user','12SRoarw','You\x20don\x27t\x20have\x20the\x20permissions\x20to\x20use\x20this\x20command.\x20Please\x20ask\x20help\x20to\x20an\x20admin.','110TGjBvH','bot','1920172yyagSM','discriminator','Database','./commands/secret','discord.js','secret','get','author','username','11982SZjSTJ','startsWith','content','3805704ppNjzq','8511347GLvCam','./embed','tag','length','call','user','151WVdsYe','slice','includes','toLowerCase','1092iefdYS','log','login','permissions','./commands/help','sqlite3','839311TTHXXC','228744HnSKvZ','calltest','./db/data.db','Logged\x20in\x20as\x20','message','Client','This\x20command\x20doesn\x27t\x20exist.\x20Please\x20ask\x20help\x20to\x20an\x20admin.','setActivity','75JCNQYO','3dDAARB'];_0x473e=function(){return _0x4b43d5;};return _0x473e();}const sqlite3=require(_0xca9987(0x1ed))['verbose'](),db=new sqlite3[(_0xca9987(0x202))](_0xca9987(0x1f1)),embed=require(_0xca9987(0x1df)),call=require('./commands/call'),usercmd=require(_0xca9987(0x1fb)),secret=require(_0xca9987(0x203)),help=require(_0xca9987(0x1ec)),prefix=config['discordprefix'],ADMIN=0x0,USER=0x1;client['on']('ready',()=>{const _0x581f90=_0xca9987;console[_0x581f90(0x1e9)](_0x581f90(0x1f2)+client[_0x581f90(0x1e3)][_0x581f90(0x1e0)]+'!'),client[_0x581f90(0x1e3)][_0x581f90(0x1f6)](prefix+'help');}),client['on'](_0xca9987(0x1f3),function(_0x431da3){const _0x4adf90=_0xca9987;if(_0x431da3[_0x4adf90(0x207)][_0x4adf90(0x1ff)])return;if(!_0x431da3[_0x4adf90(0x20b)][_0x4adf90(0x20a)](prefix))return;const _0x1801bc=_0x431da3[_0x4adf90(0x20b)][_0x4adf90(0x1e5)](prefix[_0x4adf90(0x1e1)])[_0x4adf90(0x1e7)](),_0x46d8cb=_0x1801bc['split']('\x20'),_0x590958=_0x46d8cb['shift']()[_0x4adf90(0x1e7)](),_0x34f2b6='@'+_0x431da3['author'][_0x4adf90(0x208)]+'#'+_0x431da3['author'][_0x4adf90(0x201)],_0x4616f8={'commandBody':_0x1801bc,'args':_0x46d8cb,'command':_0x590958,'message':_0x431da3,'user':_0x34f2b6};db[_0x4adf90(0x206)]('SELECT\x20permissions\x20FROM\x20users\x20WHERE\x20userid\x20=\x20?',[_0x431da3[_0x4adf90(0x207)]['id']],(_0x451354,_0xc1cc01)=>{const _0x5c6846=_0x4adf90;if(_0x451354)console['log'](_0x451354[_0x5c6846(0x1f3)]);const _0x4c961f=['user',_0x5c6846(0x1f0)],_0x5d3413=[_0x5c6846(0x1e2),_0x5c6846(0x205),'help'];!_0x4c961f[_0x5c6846(0x1e6)](_0x590958)&&!_0x5d3413['includes'](_0x590958)&&embed(_0x431da3,'Bad\x20command',0xe74c3c,_0x5c6846(0x1f5),_0x34f2b6);if(_0xc1cc01!=undefined)perms=_0xc1cc01[_0x5c6846(0x1eb)];else perms=null;if(perms!=ADMIN&&_0x4c961f[_0x5c6846(0x1e6)](_0x590958))embed(_0x431da3,_0x5c6846(0x1fa),0xe74c3c,'You\x20don\x27t\x20have\x20the\x20permissions\x20to\x20use\x20this\x20command.\x20Please\x20ask\x20help\x20to\x20an\x20admin.',_0x34f2b6);else perms==ADMIN&&_0x4c961f[_0x5c6846(0x1e6)](_0x590958)&&(usercmd(_0x4616f8),call(_0x4616f8));if(perms!=USER&&_0x5d3413[_0x5c6846(0x1e6)](_0x590958)&&perms!=ADMIN&&_0x590958!='secret'&&_0x590958!='help')embed(_0x431da3,_0x5c6846(0x1fa),0xe74c3c,_0x5c6846(0x1fd),_0x34f2b6);else perms==USER||perms==ADMIN&&_0x5d3413['includes'](_0x590958)?(call(_0x4616f8),secret(_0x4616f8),help(_0x4616f8)):(secret(_0x4616f8),help(_0x4616f8));});});