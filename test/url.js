const setup = require('./index');

describe('test url', async function () {
    beforeEach(setup);

    // reference: https://github.com/LavaMoat/snow/issues/43

    it('should fail to use atob of an iframe that is loading a blob url (text)', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const f = document.createElement('iframe');
                document.body.appendChild(f);
                f.src = URL.createObjectURL(new Blob(["<script>top.bypass([window])</script>"], {type: "text/html"}));
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a blob url (binary)', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const enc = new TextEncoder();
                const by = enc.encode("<script>top.bypass([window])</script>");
                const blob = new Blob([by], {type: 'text/html'});
                const url = URL.createObjectURL(blob);
                const ifr = document.createElement('iframe');
                document.body.append(ifr);
                ifr.src = url;
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a file url (text)', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const f = document.createElement('iframe');
                document.body.appendChild(f);
                f.src = URL.createObjectURL(new File(["<script>top.bypass([window])</script>"], 'aaa.txt', {type: "text/html"}));
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a file url (binary)', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const enc = new TextEncoder();
                const by = enc.encode("<script>top.bypass([window])</script>");
                const file = new File([by], 'aaa.txt', {type: 'text/html'});
                const url = URL.createObjectURL(file);
                const ifr = document.createElement('iframe');
                document.body.append(ifr);
                ifr.src = url;
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a file url (webkitURL)', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const enc = new TextEncoder();
                const by = enc.encode("<script>top.bypass([window])</script>");
                const file = new File([by], 'aaa.txt', {type: 'text/html'});
                const url = webkitURL.createObjectURL(file);
                const ifr = document.createElement('iframe');
                document.body.append(ifr);
                ifr.src = url;
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a blob url that was created in a web worker', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const workerJs = `postMessage(URL.createObjectURL(new Blob(["<script>top.bypass([window])</script>"], {type: "text/html"})));`
                const workerBlob = new Blob([workerJs], {type: "text/plain"})
                const w = new Worker(URL.createObjectURL(workerBlob))
                w.onmessage = (msg) => {
                    console.log(msg);
                    const f = document.createElement("iframe");
                    document.body.appendChild(f)
                    f.src = msg.data;
                }
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a blob url of an svg', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const f = document.createElement('iframe');
                document.body.appendChild(f);
                const svg = `<svg xmlns="http://www.w3.org/2000/svg"><script>top.bypass([window])</script></svg>`
                f.src = URL.createObjectURL(new Blob([svg], {type: "image/svg+xml"}));
            }());
        });
        expect(result).toBe('V');
    });

    it('should fail to use atob of an iframe that is loading a blob url of an xml document', async function () {
        const result = await browser.executeAsync(function(done) {
            const bypass = (wins) => done(wins.map(win => (win && win.atob ? win : top).atob('WA==')).join(','));
            (function(){
                top.bypass = bypass;
                setTimeout(top.bypass, 200, [top]);
                const f = document.createElement('iframe');
                document.body.appendChild(f);
                const xslt = `<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/asdf">
    <HTML>
      <BODY>
      <script>top.bypass([window])</script>
      </BODY>
    </HTML>
  </xsl:template>
</xsl:stylesheet>`;
                const xml = `<?xml version='1.0'?>
<?xml-stylesheet type="text/xsl" href="data:text/xml;base64,${btoa(xslt)}" ?>
<asdf>meep</asdf>`;
                f.src = URL.createObjectURL(new Blob([xml], {type: "text/xml"}));
            }());
        });
        expect(result).toBe('V');
    });
});