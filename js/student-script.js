var options = {
			userInfo : { 
				email : '<?=$HostName->email;?>' , 
				displayName : '<?=$HostName->name;?>',
                
				moderator: true,
			},
			roomName: "<?php echo $row['room'];?>",
			//roomName: "vpaas-magic-cookie-42d22ece486642bc99184ffbe1010e24/<?= $row['room'];?>",
			width: "100%",
			height: "100%",
           //jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtNDJkMjJlY2U0ODY2NDJiYzk5MTg0ZmZiZTEwMTBlMjQvOTNkNWY4LVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyODI2NDYxMiwibmJmIjoxNjI4MjU3NDA3LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtNDJkMjJlY2U0ODY2NDJiYzk5MTg0ZmZiZTEwMTBlMjQiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsibW9kZXJhdG9yIjp0cnVlLCJuYW1lIjoiVGVzdCBVc2VyIiwiaWQiOiJhdXRoMHw2MDg2OWE2YmRlM2U4ZDAwNzFlMDk4MGYiLCJhdmF0YXIiOiIiLCJlbWFpbCI6InRlc3QudXNlckBjb21wYW55LmNvbSJ9fX0.W7Qgajnt0IwAnDr8jGaJPUCfj8EqnaN6PiVx_9eY5n1M5PnQ6jlefBmaGqDwDThLxjcTt7MtqYxL7GMkKMWBx3Rw43Zgan8wXtOWhiFk_GjkgyTmSfpZo_DsINgYt_o_8ii-NtrgnXAp6uN6w0ANE747VI6Dqmm84dkvDd3e1xrZ7OBu7HDF5KPRieGW24YMBE39S4_OeNEY8ev_Hue1MKJvOuImXPye9nKva8A5j13D-3Kz94E_RgOs5knHvSVcq3GRUALODj_jmzIMEuWhNVBWJzViJEhBAyAL3Ys0WResQzDuKvQIMggo8hK1JrmzhsuJS_o9Ftg6ct7h1cWzhg",
			parentNode: document.querySelector('#container'),

			configOverwrite: {
			doNotStoreRoom: false,
            startVideoMuted: 0,
            startWithVideoMuted: true,
            startWithAudioMuted: true,
            enableWelcomePage: false,
            prejoinPageEnabled: false,
            disableRemoteMute: true,
            remoteVideoMenu: {
                disableKick: false,
            },

			},
			interfaceConfigOverwrite: {
			filmStripOnly: true,
           // TOOLBAR_BUTTONS: [],
           TOOLBAR_BUTTONS: ['microphone', 'camera', 'mute-everyone', 'desktop', 'fullscreen', 'fodeviceselection', 'hangup', 'chat','sharevideo', 'raisehand','tileview','videobackgroundblur',],
			}
		}


		var api = new JitsiMeetExternalAPI(domain, options);
			api.executeCommand('subject', '<?php echo $row['title'];?>');