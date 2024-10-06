'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b6e72fd980a7993e24f3361dfcd21674",
".git/config": "ad661bd0471c5b8dae305d56c9f3993d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "22bcb75653ce77ea3f27ebc655984dd3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fac57d921480d23934e8b2a1a7a35864",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39ce9de5c097711a03903da428737f04",
".git/logs/refs/heads/main": "39ce9de5c097711a03903da428737f04",
".git/logs/refs/remotes/origin/main": "773a792a9c91c0efb5802c49346448f3",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/02/b79d1610c75bda2c21563b410df0828ab727a7": "24a2cdf32c58cecbbc53da28f97f2784",
".git/objects/03/fda47825619fef87d607b115674c17b1ae9247": "4f0e9a398be7ffa52df25c3534a755a3",
".git/objects/06/9550a547af7beb7616bef5f4e89e650880d343": "0e9c2d40796f37df4603217fc3b2c35a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/0c/393716065081a3475c08c78e32a8c7a0381f35": "ecb03f3cccb09d8f4abbb1e2488a4e30",
".git/objects/0f/8b52df6f436cfeb6f19d0c559ace964496c78f": "034942470750d0fd6bc3de09cbb4ef6b",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1b/c8d29e7d50e686a293bb14cdd8de9048d1f393": "c4b184f39ff20beb22f751026e34d49d",
".git/objects/1c/c81a58ebcc3ee3208261fbd0326f1909be1b81": "20374e1da2b5ed77231ba1517bcc25ce",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/a9017e2f93ae9f91108bfcd0ceaac0a69b56f3": "594686711fc9b86b6f5337bcf6eb7cad",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/4b10fbe2af06411314871889d3bffb3607c9e8": "9574379deb10d8ef5287f73c881cfdfa",
".git/objects/27/aaa71393a453fd1c444fb02e0a9b61d485962d": "53a733b113bb820fca48256c042b74c9",
".git/objects/27/b00931fda8a02268bf4ac974f2c2768a00d812": "d8f7dfa440631719dcb26eda9f1a7f22",
".git/objects/29/c987dd76b570a37f226dbd076decbd684ef27f": "c7b7af5ba4f6195dda0cc5c350740d6d",
".git/objects/2a/09a8247e9abed5800328d237e1d9238ad21857": "e1547070a489121b3cb9a46cd003f3bc",
".git/objects/2c/81f750bc477000de206b83c68094f92bb1c0af": "9a3ffd36f41ca05c5336b098762723fc",
".git/objects/2c/cced19507f2884b673e8b54f9cceb4574fe218": "6e303af5f6da99966a0c6d779c5c4a7b",
".git/objects/2d/38fe8f96356fbec8a3afe44d310c5ef6996515": "b1431a4f08a024581754d6d89ad0d104",
".git/objects/2d/f268160c0cd36fdc785f07330433effeeb561b": "cccbf05a715ef9b1d1f39699390a6fdf",
".git/objects/37/cb6fa408f399d9f4986860bc5fa6f3329b7f91": "9f6e39632b4e4e72cc6266ca0b4778fd",
".git/objects/38/81663299ccbdeb35740c44168d96c9b3c46e38": "9b9cacfed348b9c6dba9885f451700aa",
".git/objects/38/a49f6be8363c821c8397dac6f1e34f967a9eb8": "06cf714338a530ff5e8a42e6d04549e7",
".git/objects/3b/c1e4aaa0b904d45c590343ad5e3d819e4a53dc": "b58bae7d829d40945c86cdfdd1e6c0d5",
".git/objects/41/ec80c1842ea06ab6da119fc033d5028e40c3d8": "96102d6f44437b99f81b247cd0c7a3c4",
".git/objects/42/611ab549297bfa29ad7d800bbde0cb5267ab3d": "213c721511b3928d3ff7406ae63bfa41",
".git/objects/43/3747bcd9584cf7904d6ff3ee223f3bf54b7349": "cbf1daf77008501dfc5ce5dd94639f7e",
".git/objects/44/290cd333e508dab1a7ea80b5fc3729d427d81a": "b2864741642913a4e42ff04ff7abb8a1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/68386396b2b5d8ddc82faa5c3a2d3428087cb0": "5f431eda220f52dd33417f1ccd27098f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/e379ab7c049060ea815ece017e8a3ccea3492b": "bfec00ef0c568e2abf36aa97b2744383",
".git/objects/4d/19bc2613e1da4bf31ad538b21a61d6d387b513": "56b49b2ba0c2da87e2d15d783e15d5e7",
".git/objects/4e/20de3335dfe312561dde5c49cd07bf77556d09": "dfb6304e5de77d46da666343b97a58a4",
".git/objects/51/98c0375fe0ecbd6a2967e671a99449ca2fb605": "9782fc08a09461a8abc5a3c9e6c3d3d3",
".git/objects/51/d48c056d75c5ad0baa05d1103e668ea91a52a3": "13c3f1a6e7620b0f9c30aad684c34da4",
".git/objects/59/b11ed589bfc64dbe53c2f4a1daa98ec637035a": "40bd187829726d804bff8bedad2ee622",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/84db18cd3f8432af36969564ab5fab058143dc": "a7dc1d4446e4193ca709d7f7cef57d1d",
".git/objects/5e/84365188268415b2e5d6631cce7ca5329c3a64": "58ba6745eac8697a67f8d05095fcf272",
".git/objects/5f/e9a8a6bf5a29b24a5588efc498357e510f122a": "354391e3d01bd6e0f0949a55445ff343",
".git/objects/60/ed956ec49558a26bd1433d26cc0b7357e8a860": "7fc2e1287d24722e7331b0d6463284fb",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/63/022ed896f1e371aa8f2db9e171184b7413b269": "318ad729ee2db39a1ffde04d1c253c38",
".git/objects/66/51f60bf297bdfefd07c4eb8e4b036e0f9c2c4a": "c43c78f45347327b8490f5c95b69f488",
".git/objects/68/f6b8971f154fbbafd6bde054cfb3417720897f": "f0b54224a32a525a23edfa40ae39c521",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/0fdf91e22ce561a4e50dc0dd6c565d05263cab": "23815a6109683feccb422fc3f4661023",
".git/objects/6c/b7ea6b49be1ce898f77720805f51818353175b": "ff3c5d0d603f77531693e73912dd722a",
".git/objects/6e/b5f61c93b0b52c7aa6d2b5a145f4280ec46f5f": "15a3e117854755b02795dcd6d508e00d",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/75dc2a1ecd30f69b02e47cf17079fabd31be46": "1f08cade836386d1b75fc5cb23e64b31",
".git/objects/74/7ec4977890f55a15477790ffe8e6ebd45b9bac": "6f5877638fe13398a1b22ec1c9a984a7",
".git/objects/75/d9d1566b1b58ca420778d823db6db3035a094b": "81bd0dc6d284f97f15cd443dd70f731b",
".git/objects/77/a036ab746e9738f2f76381361391f7171fde13": "69dc06dced763de31498e6c5a756a0cb",
".git/objects/77/e173d8020babf230141f95011a9356511ffe93": "5630159f20d54c832e8b1348a5883eb6",
".git/objects/7b/97bac7e1ddfa481942622fea66292a727d33fd": "8d3d5b78018a61352627a887c45d51d4",
".git/objects/7f/351f8402c24bde842b5af45566ac1b3d77aea6": "8de25836be14d730dd950af43c865ee2",
".git/objects/80/cb931a27f14b8171f69777e1485abf6298265e": "1465bdc512262a1747ce20f48a515c27",
".git/objects/80/fee200f1de41b3fcd22356c65f39beeb7edf86": "08f30f51e93bbc200d289bd0c0732546",
".git/objects/81/38f010686f96776adb15adb0e471b6ae4db2ae": "f409f04bf7ca9fd63a62fbaf64ddb011",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8b/eef436f446a1a7b260d53d6c3effbaae964266": "fc6038fd8cc428edbc298c99ccd8be85",
".git/objects/8c/f64cbcc8c87a37ba86a17d5d067af513aeeae3": "9b782a6e27213530a335f726869b5801",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/44a8aca20c5f4e7974140b37b35a754b5d182f": "b2a0307fc7f654b85f06826e81034ae0",
".git/objects/8d/aa90583df92b4b0d9fcedbb9ada24ad94b34eb": "f14870c1eb7edc2a47d909c772de61e5",
".git/objects/91/d2abfb6808be9a12fbef7c8ba26500aa3ed0c2": "082928420cc33234c3502cc8fe1002fd",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/99/52fefe883edcea0d3a5ccabf38e9e1cf1e1983": "15b79fdd260d3670af99652654fe26c6",
".git/objects/9b/2ac88494bb02dda8c45d249c605a589ea2a5c8": "6d7463559062e5a1af074bfcf7a44ac4",
".git/objects/9c/c8ece211a8c12ea8269929c6f5c55c0eb30927": "bc77203d97ce80b7fbdf492ae3d89136",
".git/objects/9e/9b8841f9f805b806a35a7faa3c9cb281163478": "9f139e7480059077f573326f19203210",
".git/objects/a0/b1aacaa188a3e41790530e260054fffd43a86c": "87d02ec18656ed775930eaee95d0f79e",
".git/objects/a1/8224c5673f5c1656faaf38b5a7923280e223e7": "6daf516775661c72b4a9ae98fd2922e2",
".git/objects/a2/dead6ac20ff941ac33106df8961598902d0c74": "58edcab48959ca2f7e3fdf823979ffe7",
".git/objects/a4/5f69e6f2600fbf894275b536609172c9baa95a": "ccc645da5565033d67238d47b616076e",
".git/objects/a4/68301c5417b039c552743b2e1483b70c39357c": "d645588345232fb369c84ccc803b3937",
".git/objects/a5/027ad399c7f86a8c90d483d905f7b95806da3f": "53b60b03a1aa7a89f19a9f6a3022d410",
".git/objects/ad/79afb1b6efedc8a3615f79da8b65a281b39bb6": "66c7343f111ce02764117fd61b1fecb7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/0978f5a62bfcd2de5afe3f6ee77ab17e081b5a": "f38ceb71587fb28f81672c960b1e0b78",
".git/objects/b1/57649d76a544d1366f59bf73175cce59a6d6d4": "3b51671dcd275e42b4378b68cd828ff4",
".git/objects/b2/cbcb8e16eca8b8c70f6893b41198d333044871": "f5ba0a6ae270b84456fb18fd6a1db876",
".git/objects/b4/d4372cf4797adfef754a0d05aaa6a2e4f66ec5": "fcf927d9e81ce9362c7c6bbbb234f650",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/2195e19cf826521cf4d910c936174e8f02735c": "27e2f4d4605007ca7e64962c3657f91d",
".git/objects/b7/eaef9a89a56e9701ffd33c5bc83fdb64609a2a": "da7cd10626aabf8719d0d7826f944559",
".git/objects/b8/59daae3e09ef5630250a4c509587426a5edafc": "d500f8f9d59b4153457f13a19da3803a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/40f8bce4452a115c12464efa137a0ab3e44949": "4ba9ac81aff8b23927e99289cf4655fd",
".git/objects/bd/fd7e1aeed0270f57c5f56fd40ba7370d6b33f5": "cfb58d1f52ae68569097384d07284d6f",
".git/objects/bf/c781cd83aed87fadeac2a1e73af00649519d1b": "4987b9b653370caf714c299c46d8bf82",
".git/objects/c1/3c4046617e4741aa9966cbc8dbdcfafc093900": "816794e475bcbf8a8b58b830ff4bab36",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/c036a68c8e171e7278d63a801a989194913a5b": "6c5e3669e39541dd561420bf046576bd",
".git/objects/c8/01f4c0b43b88477dd47a850e76d3aef463761a": "0d6d56be39a6c7491b442e3a904e2cb4",
".git/objects/c8/1a8944865614dabb6cb6cfac548a136acde471": "6d52036d4909e52679568cd5935dbe4e",
".git/objects/c8/7fd14630458879238c58ce7c1ca4c646179e2f": "fc454267b9c6740d254cf01c624c0051",
".git/objects/c9/fd1916ea10a7cbdb46ac669e42b2ed0c3efeb6": "9ce23eaf47581db2bf5825e3a240cb36",
".git/objects/ca/b96a4c2b9fbead6ea91cc03f0e39fb32109b4b": "2231dc1f882d0fa969ecdf9381877867",
".git/objects/ce/940466ff0d75cdab2495dc6ca615961145efa3": "d434065adad804ccca5828859f1a929f",
".git/objects/d2/9c694e9a749928769c557fa09491f1167358b9": "39f8c9c0d621ff54f05e7ab4399ff467",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/cbe1ae05c1f43024ae58666ecd9b1e4d72bd47": "c37f95deabf344e21b083b8bfafaf7bf",
".git/objects/dc/0acfbdf516a0b51bba03a9cb5d35f363342bdc": "7322390ddcbd4a51e475190f76e9d017",
".git/objects/e0/101694d9c484094f9e1e8bca885267df879c19": "85a488f0b866cc3d8434dcf6af879325",
".git/objects/e1/d477eaf33df7f3bf19c90038f8f3dc320cce50": "3c60779337f61799a0be8224db4cb1ba",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e4/1288d5ba89a620b7fc9f2825af64a3e74387b6": "43d93e92d67486331c59f35862acc0ae",
".git/objects/e5/6d501391ab10972af231dde0926302239c6b1f": "849e6219c70e16e482e560a769a8eca6",
".git/objects/e8/0703e463ed184a1961c70a549a92c820a3f713": "8dea199e1c1bb2d1857f91519d319d96",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/3a33f55b4a1caa3087be1142d6475bbc520c2e": "188b6b4ff3459f08b4840bf4d14218fb",
".git/objects/ea/a2e14b28e845478df25fda1e773de0952b9d9c": "183ed0933e7c8b883615a6253febd2e5",
".git/objects/eb/14d84b57b9bf354a341d574941422a48fc426c": "13a1def69c0ff697836f829621d4267b",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ec/31a7fd5e92bd854b97aa2810d002429aa9dc2b": "fd96369be954ebdba3be9d2dc87269ad",
".git/objects/ee/779bab48d8f98a46f2578fce1e524b919b4557": "803ea9a81c7e41e599ff470c71788710",
".git/objects/ef/8eef9234c242a9e11ce49908e1bfe9ec136989": "1cb3411dac1e2828bab0f049ac035229",
".git/objects/f0/b206e16313eb525f33f8a52a64ea7505aad6f8": "6493e9243578b8e5acf4792eb432d4c9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/299bd65baa75a2b31ff1d62440361c34195b92": "3f3881127158ea2496c96256c3750301",
".git/objects/fa/6828711eca5bbc5d0663268dc796f031cabf4a": "15b05d68e2094cfd61d68d6ca39f04b2",
".git/objects/fe/470460bf21909c0473af9e36949f46550408b0": "8091a85940a4fa47ddc82ded12a62b2a",
".git/objects/fe/80a30a98408377d11d78a450adf45dd1f286fa": "057f1552a3c4ac04e7ecca158be87855",
".git/objects/ff/02367c41a2eb6ce3e8b2f294a0b6eb01454713": "ce560e3a5e60d30b1bcf93590a20a8d2",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/ORIG_HEAD": "dff33d4f5e4d2213c079996983a4d6cc",
".git/refs/heads/main": "585d2bda1a0e175eb53b5ad9d6a1071a",
".git/refs/remotes/origin/main": "585d2bda1a0e175eb53b5ad9d6a1071a",
"assets/AssetManifest.bin": "e7de3f0c075a1a0ec339b596bb2ff896",
"assets/AssetManifest.bin.json": "6796645d004ad9acd034ff488a011203",
"assets/AssetManifest.json": "05ca927e5f6e95a670947d0f060ab738",
"assets/assets/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/assets/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/assets/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/assets/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/assets/images/backpage.png": "c574c0deeb4e42a934c423f026fc3f4e",
"assets/assets/images/calender.png": "8d4a6f81c1a7f2dae951b4e532f892f1",
"assets/assets/images/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/darshancv.pdf": "de8485cfa71906fe3da9712e32a7504e",
"assets/assets/images/design.png": "31fc5865c6e2cec49a8bf85313242a67",
"assets/assets/images/dp.png": "52baabcf6d2c00b8d4d290237ccac125",
"assets/assets/images/email.png": "bdfb4e74b43df853b0b7f2124344de3c",
"assets/assets/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/assets/images/firebase.png": "5bb2cb1d383353e6ced80930d1097615",
"assets/assets/images/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/git.png": "4ec9a3823499f46c1ebf60f6a8f43b9c",
"assets/assets/images/github.png": "088be43f4b8003f715f4d26c981a5ddb",
"assets/assets/images/in.png": "ad6884c64deb890226860148e2d62e1c",
"assets/assets/images/insta.png": "cc1e9597ab5186deeedcad484d27778d",
"assets/assets/images/it.png": "5a1acd564c0835d7e015c2123ba9ffcd",
"assets/assets/images/ITB.png": "a22a3c2368cf36095041e798356da115",
"assets/assets/images/jb.png": "6df5d5776ca9cf568895fb57036d564d",
"assets/assets/images/js.png": "1348eba6c70c7918beb1aa4e99aeef88",
"assets/assets/images/logo.png": "502688b6da3b67edea5ffc34ad3ba438",
"assets/assets/images/modp.png": "27efdbe0e11f2aab5ff80416710e53ce",
"assets/assets/images/mongo.png": "8c8ff922bc938d28900b4184c1e7a275",
"assets/assets/images/mrdp.png": "eff3aa2f729ea0d73abe24808f070978",
"assets/assets/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/assets/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/assets/images/point.png": "98afad711363a9d20dc2ccc635391190",
"assets/assets/images/postman.png": "3e657c77e923c2cae914bb43e8c17475",
"assets/assets/images/profile.png": "baf53e4617b119522055f10bee845ebe",
"assets/assets/images/profile1.png": "1a8d01e9add16905d334756eeb0f14b3",
"assets/assets/images/shado.png": "8135966d9a4687dac9869264a0bd1bd8",
"assets/assets/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/assets/images/ts.png": "aef3ee6ebf9926d28efa5c962744cf01",
"assets/assets/images/whaitgit.png": "dd654e661816a2d7de05ccfaa95b7227",
"assets/assets/images/whaitin.png": "92ec2bce4c182f5755c1f5bfbbe9ddbe",
"assets/assets/images/wightemail.png": "7a2bbbe39d894df810ae111c1e0ff0d7",
"assets/FontManifest.json": "367d1136a8c038074fb602e82e8c29d3",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/MaterialIcons-Regular.otf": "09061a999984f53967512e5b1a804b25",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/NOTICES": "8e8fe7cc54b5046ff9642be18f975b8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "a62ed61d10ea008415f8e7d73a4f26fb",
"favicon.png": "f2b31c1b97a11084b7a2447de9958a3e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "f2b31c1b97a11084b7a2447de9958a3e",
"icons/android-chrome-512x512.png": "60c7aeeac790aa1bf64aace45228c003",
"icons/apple-touch-icon.png": "73018b8f769147cfed4dbdec567a1998",
"index.html": "2256f82b426bee6092257d620c2a4382",
"/": "2256f82b426bee6092257d620c2a4382",
"logo.png": "06b74e3791c16bd6a01b8c344cedb3a6",
"main.dart.js": "9a7dd2ad4c0125139b085a4c51ebabe1",
"manifest.json": "ce79553c1dd74a6c5d07903bee3bcc72",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
