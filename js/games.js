//Should be .json, but vs code throws an error if we asign a variable in a .json.

var data = [
    {
        "title":"Age of Empires IV",
        "url":"https://image.jeuxvideo.com/medias/163214/1632143636-6808-jaquette-avant.jpg",
        "studio":"Relic Entertainment",
        "editor":"Xbox Games Studios",
        "release":"2021",
        "cat":"strategy"
    },
    {
        "title":"Animal Crossing: New Horizons",
        "url":"https://image.jeuxvideo.com/medias-sm/161616/1616164719-8684-jaquette-avant.jpg",
        "studio":"Nintendo EPD",
        "editor":"Nintendo",
        "release":"2020",
        "cat":"simulator"
    },
    {
        "title":"Apex Legends",
        "url":"https://image.jeuxvideo.com/medias/155137/1551371304-2322-jaquette-avant.jpg",
        "studio":"Respawn Entertainment",
        "editor":"EA",
        "release":"2019",
        "cat":"shooter"
    },
    {
        "title":"Big Rumble Boxing: Creed Champions",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202105/2501/IfXAcpTPzlpoKHYYyLjNvO74.png",
        "studio":"Survios",
        "editor":"Survios",
        "release":"2021",
        "cat":"sport"
    },
    {
        "title":"Blazblue: Cross Tag Battle",
        "url":"https://image.jeuxvideo.com/medias/152085/1520848161-5549-jaquette-avant.jpg",
        "studio":"Arc System Works",
        "editor":"Arc System Works",
        "release":"2018",
        "cat":"vsfighter"
    }, 
    {
        "title":"Bus Simulator 21",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202107/2906/4M6DnIB1lLjxKH3odQ1YDDFm.png",
        "studio":"Stillalive Studios",
        "editor":"Astragon",
        "release":"2021",
        "cat":"simulator"
    },
    {
        "title":"Call of Duty: Warzone",
        "url":"https://sm.ign.com/ign_fr/cover/c/call-of-du/call-of-duty-warzone_r924.jpg",
        "studio":"Raven Software",
        "editor":"Activision",
        "release":"2020",
        "cat":"shooter"
    },
    {
        "title":"Civilization VI",
        "url":"https://gpstatic.com/acache/30/31/1/fr/packshot-f759a20046b172675751ddf11486dca8.jpg",
        "studio":"Firaxis Games",
        "editor":"2K Games",
        "release":"2016",
        "cat":"strategy"
    },
    {
        "title":"Crusader Kings III",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202108/1607/cWFhlMdzAFCcosz8L1paaKF6.jpg",
        "studio":"Paradox Developement Studio",
        "editor":"Paradox Interactive",
        "release":"2020",
        "cat":"strategy"
    },
    {
        "title":"Cyberpunk 2077",
        "url":"https://image.jeuxvideo.com/medias-sm/163835/1638354762-4961-jaquette-avant.gif",
        "studio":"CD Projekt RED",
        "editor":"CD Projekt RED",
        "release":"2020",
        "cat":"rpg"
    },
    {
        "title":"Desperados III",
        "url":"https://image.api.playstation.com/vulcan/img/cfn/11307q0k3sbv98YWpRop-6Tcl5sHJSy9tqcFFjAAiCok8lOs90RYikGrme9PajUjVKR7lSX6WJhTzg_O7eOBHtkjO1w_BjC4.png",
        "studio":"Mimimi Games",
        "editor":"THQ Nordic",
        "release":"2020",
        "cat":"strategy"
    },
    {
        "title":"Destiny 2",
        "url":"https://storage.googleapis.com/tayara-migration-yams-pro/de/de7bc7a9-6268-4948-ad4e-3c6c8d02f218.jpg",
        "studio":"Bungie Studios",
        "editor":"Activision",
        "release":"2017",
        "cat":"shooter"
    },
    {
        "title":"Deus Ex: Mankind Divided",
        "url":"https://gh.cdn.sewest.net/assets/ident//games/deus-ex-mankind-divided/fr_FR/GamePage_Header_Portrait_03.jpg?quality=65&width=960px&height=1280px",
        "studio":"Square Enix",
        "editor":"Square Enix",
        "release":"2016",
        "cat":"rpg"
    },
    {
        "title":"Diablo III",
        "url":"https://jeuxfaisquoi.fr/wp-content/uploads/2020/04/Diablo3.jpg",
        "studio":"Blizzard Entertainment",
        "editor":"Blizzard Entertainment",
        "release":"2012",
        "cat":"rpg"
    },
    {
        "title":"Disco Elysium",
        "url":"https://cdn.cdkeys.com/500x706/media/catalog/product/e/u/eu-generic-coverart_3_.jpg",
        "studio":"ZA/UM",
        "editor":"ZA/UM",
        "release":"2019",
        "cat":"rpg"
    },
    {
        "title":"Doom Eternal",
        "url":"https://images-na.ssl-images-amazon.com/images/I/91qm95y+rZL.jpg",
        "studio":"id Software",
        "editor":"Bethesda Softworks",
        "release":"2020",
        "cat":"shooter"
    },
    {
        "title":"Dragon Ball FighterZ",
        "url":"https://cdn-prod.scalefast.com/public/assets/user/122595/image/6d380937c8407749e846865c8a40f58b.jpg",
        "studio":"Arc System Works",
        "editor":"Bandai Namco Entertainment",
        "release":"2018",
        "cat":"vsfighter"
    },
    {
        "title":"Elden Ring",
        "url":"https://preview.redd.it/u7j3o6aasgl81.jpg?auto=webp&s=c30e4902e2c7a28ff3e996905c540da9113d6708",
        "studio":"FromSoftware",
        "editor":"Bandai Namco Entertainment",
        "release":"2022",
        "cat":"rpg"
    },
    {
        "title":"Euro Truck Simulator 2",
        "url":"https://s1.gaming-cdn.com/images/products/309/orig-fallback-v1/euro-truck-simulator-2-pc-mac-jeu-steam-cover.jpg",
        "studio":"SCS Software",
        "editor":"SCS Software",
        "release":"2012",
        "cat":"simulator"
    },
    {
        "title":"Far Cry 6",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202106/1514/RBmWUk2SrhLopsMXNCSZlQpG.png",
        "studio":"Ubisoft Toronto",
        "editor":"Ubisoft",
        "release":"2021",
        "cat":"adventure"
    },
    {
        "title":"Farming Simulator",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202107/0508/wg0gD2XINJXeJox3mrYSRoqA.png",
        "studio":"GIANTS Software",
        "editor":"GIANTS Software",
        "release":"2019",
        "cat":"simulator"
    },
    {
        "title":"FIFA 22",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png",
        "studio":"EA Vancouver",
        "editor":"EA",
        "release":"2021",
        "cat":"sport"
    }, 
    {
        "title":"Fire Emblem: Awakening",
        "url":"https://images-na.ssl-images-amazon.com/images/I/81WKCCLk6nL.jpg",
        "studio":"Nintendo",
        "editor":"Nintendo",
        "release":"2012",
        "cat":"strategy"
    },
    {
        "title":"Flight Simulator",
        "url":"https://store-images.s-microsoft.com/image/apps.65126.13616710694760137.286559f2-791d-44cd-8d3f-6847f5e54bf2.c869d6aa-468a-4a33-a3e7-c3354beab0d0",
        "studio":"Asobo Studio",
        "editor":"Aerosoft",
        "release":"2020",
        "cat":"simulator"
    },
    {
        "title":"Fortnite",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202203/1819/sbaZEJ4jKCsdLAjQwVPSzMza.png",
        "studio":"Epic Games",
        "editor":"Epic Games",
        "release":"2017",
        "cat":"shooter"
    },
    {
        "title":"Genshin Impact",
        "url":"https://image.jeuxvideo.com/medias-sm/163299/1632994028-1028-jaquette-avant.png",
        "studio":"MiHoYo",
        "editor":"MiHoYo",
        "release":"2020",
        "cat":"rpg"
    },
    {
        "title":"Goat Simulator",
        "url":"https://image.api.playstation.com/cdn/EP4415/CUSA02779_00/05UDaF6g0ZyfhUZdSg5xgRRpuNBDep4Q.png",
        "studio":"Coffee Stain Studios",
        "editor":"Cofee Stain Studios",
        "release":"2014",
        "cat":"simulator"
    },
    {
        "title":"God of War",
        "url":"https://s3.gaming-cdn.com/images/products/7325/orig-fallback-v1/god-of-war-pc-jeu-steam-cover.jpg",
        "studio":"SIE Santa Monica Studio",
        "editor":"Sony Interactive Entertainment",
        "release":"2018",
        "cat":"adventure"
    },
    {
        "title":"GUILTY GEAR -STRIVE-",
        "url":"https://s1.gaming-cdn.com/images/products/6948/orig-fallback-v1/jeu-steam-guilty-gear-strive-cover.jpg",
        "studio":"Arc System Works",
        "editor":"Bandai Namco",
        "release":"2021",
        "cat":"vsfighter"
    },
    {
        "title":"Half-Life: Alyx",
        "url":"https://image.jeuxvideo.com/medias/157436/1574359512-5514-jaquette-avant.png",
        "studio":"Valve",
        "editor":"Valve",
        "release":"2020",
        "cat":"shooter"
    },
    {
        "title":"Half-Life: Black Mesa",
        "url":"https://www.jvfrance.com/wp-content/uploads/2021/02/Black-Mesa.jpg",
        "studio":"Crowbar Collective",
        "editor":"Crowbar Collective",
        "release":"2015",
        "cat":"shooter"
    },
    {
        "title":"Humankind",
        "url":"https://image.jeuxvideo.com/medias/163361/1633613546-5399-jaquette-avant.png",
        "studio":"Amplitude Studios",
        "editor":"Sega",
        "release":"2020",
        "cat":"strategy"
    },
    {
        "title":"Hunting Simulator 2",
        "url":"https://store-images.s-microsoft.com/image/apps.52563.13516133317152422.dff2f167-c340-4d7c-a7c2-6c06c259e0d9.07ac7e72-1269-43fe-93a7-a3431ac48412",
        "studio":"Neopica",
        "editor":"Nacon",
        "release":"2020",
        "cat":"simulator"
    },
    {
        "title":"Kingdom Hearts 3",
        "url":"https://image.jeuxvideo.com/medias/161722/1617220611-4137-jaquette-avant.jpg",
        "studio":"Square Enix",
        "editor":"Square Enix",
        "release":"2019",
        "cat":"adventure"
    },
    {
        "title":"Life is Strange",
        "url":"https://images-na.ssl-images-amazon.com/images/I/71CldaqtU-L.jpg",
        "studio":"Dontnod Entertainment",
        "editor":"Square Enix",
        "release":"2015",
        "cat":"adventure"
    },
    {
        "title":"Madden NFL 22",
        "url":"https://cdn-products.eneba.com/resized-products/3oSjLWh0PD7mPzjw-dH8E2U4LpvCc4Bh3sbfmHABsWY_350x200_1x-0.jpeg",
        "studio":"EA",
        "editor":"EA",
        "release":"2020",
        "cat":"sport"
    },
    {
        "title":"Mario Golf: Super Rush",
        "url":"https://lemagjeuxhightech.com/wp-content/uploads/2021/02/Mario-Golf-Super-Rush-vous-pouvez-le-reserver.jpg",
        "studio":"Camelot Software Planning",
        "editor":"Nintendo",
        "release":"2021",
        "cat":"sport"
    },
    {
        "title":"Marvel's Spider-Man",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png",
        "studio":"Insomniac Games",
        "editor":"Sony Interactive Entertainment",
        "release":"2018",
        "cat":"adventure"
    },
    {
        "title":"Mass Effect: Legendary Edition",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202101/2517/xK2b8gY5A5oyYlc1pnUUVEm5.png",
        "studio":"BioWare",
        "editor":"EA",
        "release":"2021",
        "cat":"rpg"
    },
    {
        "title":"MLB: The Show 22",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202201/2818/5HvW0dqebrOsFASfaRR6XDyr.png",
        "studio":"SIE San Diego Studio",
        "editor":"Sony interactive Entertainment",
        "release":"2022",
        "cat":"sport"
    },
    {
        "title":"Mortal Kombat 11",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202009/1121/ppFUV2JC2xDd9Z6xbQ6M2Xm7.jpg",
        "studio":"NetherRealm Studios",
        "editor":"Warner Bros. Interactive Entertainment",
        "release":"2019",
        "cat":"vsfighter"
    },
    {
        "title":"Naruto Shippuden: Ultimate Ninja Storm 4",
        "url":"https://cdn-prod.scalefast.com/public/assets/user/122595/image/07d46eb2c3db8e017d4466d855b6a1a7.jpg",
        "studio":"CyberConnect2",
        "editor":"Bandai Namco Entertainment",
        "release":"2017",
        "cat":"vsfighter"
    },
    {
        "title":"NBA 2K22 2k",
        "url":"https://image.jeuxvideo.com/medias-sm/163154/1631535511-3744-jaquette-avant.jpg",
        "studio":"2K Games",
        "editor":"2K Games",
        "release":"2021",
        "cat":"sport"
    },
    {
        "title":"Neverwinter",
        "url":"https://top-mmorpg.ru/uploads/posts/2020-07/1594598309_neverwinter-online-poster-4-top-mmorpg_ru.jpg",
        "studio":"Cryptic Studios",
        "editor":"Perfect World Entertainment",
        "release":"2013",
        "cat":"rpg"
    },
    {
        "title":"NHL",
        "url":"https://m.media-amazon.com/images/I/813KdlyxANL._AC_SX425_.jpg",
        "studio":"EA Vancouver",
        "editor":"EA",
        "release":"2021",
        "cat":"sport"
    },
    {
        "title":"Nintendo Switch Sports",
        "url":"https://image.jeuxvideo.com/medias-sm/164450/1644499373-7692-jaquette-avant.jpg",
        "studio":"Nintendo",
        "editor":"Nintendo",
        "release":"2022",
        "cat":"sport"
    },
    {
        "title":"Northgard",
        "url":"http://cdn.supersoluce.com/file/docs/docid_5936637c8f152f383e000016/elemid_4ee9d6ec0a2fe93f0e00000c/.jpg",
        "studio":"Shiro Games",
        "editor":"Shiro Games",
        "release":"2017",
        "cat":"strategy"
    },
    {
        "title":"One Piece: Burning Blood",
        "url":"https://image.api.playstation.com/cdn/EP0700/CUSA03584_00/2Sc7N60LkycmeDYduUiANVthFoFqq8ii.png",
        "studio":"Spike Chunsoft",
        "editor":"Bandai Namco Entertainment",
        "release":"2016",
        "cat":"vsfighter"
    },
    {
        "title":"Overwatch",
        "url":"https://s1.gaming-cdn.com/images/products/2208/orig-fallback-v1/overwatch-pc-jeu-battlenet-cover.jpg",
        "studio":"Blizzard Entertainment",
        "editor":"Blizzard Entertainment",
        "release":"2016",
        "cat":"shooter"
    },
    {
        "title":"Pillars of Eternity",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202009/3011/zeqvemQByqfhE9wVcFiEZAvc.png",
        "studio":"Obsidian Entertainment",
        "editor":"Versus Evil",
        "release":"2015",
        "cat":"rpg"
    },
    {
        "title":"Ratchet et Clank: Rift Apart",
        "url":"https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOsFOyPdNzmSTSWuxG.png",
        "studio":"Insomniac Games",
        "editor":"Sony Interactive Entertainment",
        "release":"2021",
        "cat":"adventure"
    },
    {
        "title":"Red Dead Redemption 2",
        "url":"https://c.clc2l.com/t/R/e/Red-Dead-Redemption-II-Yq75UV.jpeg",
        "studio":"Rockstar Studios",
        "editor":"Rockstar Games",
        "release":"2018",
        "cat":"adventure"
    },
    {
        "title":"Riders Republic",
        "url":"https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwfb44da29/images/large/5f2816a15cdf9a055850c796.jpg?sw=341&sh=450&sm=fit",
        "studio":"Ubisoft",
        "editor":"Ubisoft",
        "release":"2021",
        "cat":"sport"
    },
    {
        "title":"Ring Fit Adventure",
        "url":"https://assets.nintendo.eu/image/upload/f_auto,q_auto,t_product_tile_desktop/MNS/NOE/000000000010001992/1.1_2000x2000_ProductTile_Switch_RingFitAdventure_KeyArt_enGB_v1_100q",
        "studio":"Nintendo Entertainment Planning & Development",
        "editor":"Nintendo",
        "release":"2019",
        "cat":"sport"
    },
    {
        "title":"Sims 4",
        "url":"https://m.media-amazon.com/images/I/71otyq1xFNL._AC_SY500_.jpg",
        "studio":"Maxis",
        "editor":"EA",
        "release":"2014",
        "cat":"simulator"
    },
    {
        "title":"Stellaris",
        "url":"https://store-images.s-microsoft.com/image/apps.10542.71592693192229022.95f29c62-8ab9-4865-a362-219a5bf8c0d3.e1fbe4bc-1592-40a9-8545-1d76aef61a11",
        "studio":"Paradox Development Studio",
        "editor":"Paradox Interactive",
        "release":"2016",
        "cat":"strategy"
    },
    {
        "title":"SoulCalibur I",
        "url":"https://www.pixelheart.eu/wp-content/uploads/2021/03/Jaquette-Soulcalibur-Dreamcast-PAL.jpg",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"1998",
        "cat":"vsfighter"
    },
    {
        "title":"SoulCalibur II",
        "url":"https://image.jeuxvideo.com/images/gc/s/o/soulgc0f.jpg",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2002",
        "cat":"vsfighter"
    },
    {
        "title":"SoulCalibur III",
        "url":"https://m.media-amazon.com/images/I/51RRA85H63L._AC_.jpg",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2005",
        "cat":"vsfighter"
    },
    {
        "title":"SoulCalibur IV",
        "url":"https://www.gamecash.fr/thumbnail-600/soulcalibur-iv-ps3-e10943.jpg",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2008",
        "cat":"vsfighter"
    },
    {
        "title":"SoulCalibur V",
        "url":"https://m.media-amazon.com/images/M/MV5BZWE3M2JjZjgtN2Y2My00MmY1LTkyNmYtOWMxNGUxZWIyZjI2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2012",
        "cat":"vsfighter"
    },
    {
        "title":"SoulCalibur VI",
        "url":"https://image.api.playstation.com/cdn/EP0700/CUSA09884_00/InTjrv6HYQfRaZLFk6SchRYWVT5E2I2a.png",
        "studio":"Project Soul",
        "editor":"Bandai Namco Entertainment",
        "release":"2018",
        "cat":"vsfighter"
    },
    {
        "title":"Street Fighter I",
        "url":"https://images-na.ssl-images-amazon.com/images/I/81vvC0QT+QL.jpg",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"1987",
        "cat":"vsfighter"
    }, 
    {
        "title":"Street Fighter II",
        "url":"https://static.tvtropes.org/pmwiki/pub/images/sf2_akiman.png",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"1994",
        "cat":"vsfighter"
    }, 
    {
        "title":"Street Fighter III",
        "url":"https://www.fightersgeneration.com/nf9/game/sf3-3rd-strike-poster-art-by-daigo-ikeno.jpg",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"1997",
        "cat":"vsfighter"
    }, 
    {
        "title":"Street Fighter IV",
        "url":"https://cdn-products.eneba.com/resized-products/ZZCfbZT_350x200_1x-0.jpg",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"2008",
        "cat":"vsfighter"
    }, 
    {
        "title":"Street Fighter V",
        "url":"https://s1.gaming-cdn.com/images/products/5820/orig-fallback-v1/street-fighter-v-champion-edition-upgrade-kit-bundle-pc-jeu-steam-cover.jpg",
        "studio":"Capcom",
        "editor":"Capcom",
        "release":"2016",
        "cat":"vsfighter"
    },
    {
        "title":"Super Smash Bros. Ultimate",
        "url":"https://static.wikia.nocookie.net/wikidoublage/images/5/5e/Super_Smash_Bros_Ultimate.jpg/revision/latest?cb=20190829210826&path-prefix=fr",
        "studio":"Sora",
        "editor":"Nintendo",
        "release":"2018",
        "cat":"vsfighter"
    },
    {
        "title":"Tekken 7",
        "url":"https://image.api.playstation.com/cdn/EP0700/CUSA06014_00/60LMXmTtlbr3RwGglLc9awmBpcFRCC5S.png",
        "studio":"Bandai Namco Studios",
        "editor":"Bandai Namco Entertainment",
        "release":"2015",
        "cat":"vsfighter"
    },
    {
        "title":"The Elder Scrolls V: Skyrim",
        "url":"https://static.wikia.nocookie.net/elderscrolls/images/c/c5/Skyrim_Cover.png/revision/latest?cb=20160812173034",
        "studio":"Bethesda Game Studios",
        "editor":"Bethesda Softworks",
        "release":"2011",
        "cat":"rpg"
    },
    {
        "title":"The Elder Scrolls: Online",
        "url":"https://images-na.ssl-images-amazon.com/images/I/81hIHJomPRL.jpg",
        "studio":"ZeniMax Online Studios",
        "editor":"Bethesda Softworks",
        "release":"2014",
        "cat":"rpg"
    },
    {
        "title":"The Legend of Zelda: Breath of the Wild",
        "url":"https://cdn-bnplf.nitrocdn.com/PnTamyYWaToimYiFMSaQnRpmLLjgNHjT/assets/static/optimized/rev-4b75941/images/games/5632786/the-legend-of-zelda-breath-of-the-wild-desktop-logo-all.jpg",
        "studio":"Nintendo Entertainment Planning & Development",
        "editor":"Nintendo",
        "release":"2017",
        "cat":"adventure"
    },
    {
        "title":"The Witcher 3: Wild Hunt",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png",
        "studio":"CD Projekt RED",
        "editor":"CD Projekt RED",
        "release":"2015",
        "cat":"rpg"
    },
    {
        "title":"Titanfall 2",
        "url":"https://image.api.playstation.com/cdn/EP0006/CUSA04013_00/4bI5D3WvesQPmegKpGINAimOsS27D688.png",
        "studio":"Respawan Entertainment",
        "editor":"EA",
        "release":"2016",
        "cat":"shooter"
    },
    {
        "title":"Tom Clancy's Rainbow Six Siege",
        "url":"https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw96e74d63/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit",
        "studio":"Ubisoft Montréal",
        "editor":"Ubisoft",
        "release":"2015",
        "cat":"shooter"
    },
    {
        "title":"Total War: Warhammer 2",
        "url":"https://i2.wp.com/www.semperludo.com/wp-content/uploads/2018/04/Total-War-Warhammer-2-cover-PC-b.jpg?fit=400%2C550&ssl=1",
        "studio":"Creative Assembly",
        "editor":"Feral Interactive",
        "release":"2017",
        "cat":"strategy"
    },
    {
        "title":"Ultimate Fishing Simulator 2",
        "url":"https://www.mobygames.com/images/covers/l/662313-ultimate-fishing-simulator-xbox-one-front-cover.jpg",
        "studio":"MasterCode",
        "editor":"Ultimate Games",
        "release":"2021",
        "cat":"simulator"
    },
    {
        "title":"Until Dawn",
        "url":"https://image.api.playstation.com/vulcan/img/rnd/202010/2318/2cJRHg2UOwbvp10QxGrbX62S.png",
        "studio":"Supermassive Games",
        "editor":"Sony Interactive Entertainment",
        "release":"2015",
        "cat":"adventure"
    },
    {
        "title":"XCOM 2",
        "url":"https://image.api.playstation.com/cdn/EP1001/CUSA04530_00/Xzv6Tkk60YPH1wK9yre67zvk4TvrtooW.png",
        "studio":"Feral Interactive",
        "editor":"2K Games",
        "release":"2016",
        "cat":"strategy"
    },
    {
        "title":"Youtubers Life",
        "url":"https://s1.gaming-cdn.com/images/products/1449/orig-fallback-v1/youtubers-life-pc-mac-jeu-steam-cover.jpg",
        "studio":"UPlay Online",
        "editor":"Raiser Games",
        "release":"2016",
        "cat":"simulator"
    },
    {
        "title":"Youtubers Life 2",
        "url":"https://s3.gaming-cdn.com/images/products/8651/orig-fallback-v1/youtubers-life-2-pc-mac-jeu-steam-cover.jpg",
        "studio":"UPlay Online",
        "editor":"Raiser Games",
        "release":"2021",
        "cat":"simulator"
    }

]