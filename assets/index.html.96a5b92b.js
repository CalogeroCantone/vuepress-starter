import{_ as a,o as e,c as p,a as s,d as t,t as o,e as r}from"./app.8c9586a1.js";const l={},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
Alice<span class="token arrow operator">-&gt;</span>John<span class="token operator">:</span> Hello John, how are you?
<span class="token keyword">loop</span> every minute
    John<span class="token arrow operator">--&gt;</span>Alice<span class="token operator">:</span> Great!
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>
<span class="token keyword">flowchart</span> LR

<span class="token comment">%% GOALS DATABASE %%</span>

<span class="token comment">%% Goals &amp; Projects %%</span>
G<span class="token text string">[(Goals)]</span> <span class="token arrow operator">&lt;===&gt;</span> <span class="token label property">|Connect To|</span> P<span class="token text string">[(Projects)]</span>

<span class="token comment">%% PROJECTS DATABASE %%</span>

<span class="token comment">%% Deadline %%</span>
P <span class="token arrow operator">---o</span> <span class="token label property">|Has|</span> PD<span class="token text string">(Deadline)</span>
PD <span class="token arrow operator">----</span> <span class="token label property">|Is|</span> MT<span class="token text string">([Met])</span> &amp; OV<span class="token text string">([Overdue])</span>
OV <span class="token arrow operator">---&gt;</span> <span class="token label property">|Push|</span> OVF<span class="token text string">{4 Days}</span>

<span class="token comment">%% Tasks %%</span>
P <span class="token arrow operator">---o</span> <span class="token label property">|Has|</span> PT<span class="token text string">(Tasks)</span>
PT <span class="token arrow operator">---x</span> <span class="token label property">|Is|</span> IC<span class="token text string">([Incomplete])</span>
PT <span class="token arrow operator">----</span> <span class="token label property">|Is|</span> C<span class="token text string">([Complete])</span>
C <span class="token arrow operator">---&gt;</span> <span class="token label property">|Needs|</span> R<span class="token text string">[[Review]]</span>

<span class="token comment">%% Review &amp; Goals %%</span>
R <span class="token arrow operator">-..-&gt;</span> <span class="token label property">|Creates New|</span> G

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TD

<span class="token comment">%% Colors %%</span>
<span class="token keyword">classDef</span> blue <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#2374f7<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#000<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff</span>
<span class="token keyword">classDef</span> pink <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#eb3dd6<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#000<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff</span>
<span class="token keyword">classDef</span> orange <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#fc822b<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#000<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff</span>
<span class="token keyword">classDef</span> red <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#ed2633<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#000<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff</span>
<span class="token keyword">classDef</span> green <span class="token style"><span class="token property">fill</span><span class="token operator">:</span>#16b522<span class="token punctuation">,</span><span class="token property">stroke</span><span class="token operator">:</span>#000<span class="token punctuation">,</span><span class="token property">stroke-width</span><span class="token operator">:</span>2px<span class="token punctuation">,</span><span class="token property">color</span><span class="token operator">:</span>#fff</span>


<span class="token comment">%% GOALS DATABASE %%</span>

<span class="token comment">%% Goals &amp; Projects %%</span>
G<span class="token text string">[(Goals)]</span><span class="token operator">:::</span>blue <span class="token arrow operator">&lt;===&gt;</span> <span class="token label property">|Connect To|</span> P<span class="token text string">[(Projects)]</span><span class="token operator">:::</span>blue


<span class="token comment">%% PROJECTS DATABASE %%</span>

<span class="token comment">%% Deadline %%</span>
P <span class="token arrow operator">---o</span> <span class="token label property">|Has|</span> PD<span class="token text string">(Deadline)</span><span class="token operator">:::</span>orange
PD <span class="token arrow operator">---x</span> <span class="token label property">|Is|</span> MT<span class="token text string">([Met])</span><span class="token operator">:::</span>green
PD <span class="token arrow operator">----</span> <span class="token label property">|Is|</span> OV<span class="token text string">([Overdue])</span><span class="token operator">:::</span>red
OV <span class="token arrow operator">---&gt;</span> <span class="token label property">|Push|</span> OVF<span class="token text string">{4 Days}</span><span class="token operator">:::</span>pink

<span class="token comment">%% Tasks %%</span>
P <span class="token arrow operator">---o</span> <span class="token label property">|Has|</span> PT<span class="token text string">(Tasks)</span><span class="token operator">:::</span>orange
PT <span class="token arrow operator">---x</span> <span class="token label property">|Is|</span> IC<span class="token text string">([Incomplete])</span><span class="token operator">:::</span>red
PT <span class="token arrow operator">----</span> <span class="token label property">|Is|</span> C<span class="token text string">([Complete])</span><span class="token operator">:::</span>green
C <span class="token arrow operator">---&gt;</span> <span class="token label property">|Needs|</span> R<span class="token text string">[[Review]]</span>

<span class="token comment">%% Review &amp; Goals %%</span>
R <span class="token arrow operator">-..-&gt;</span> <span class="token label property">|Creates New|</span> G

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(n,v){return e(),p("div",null,[s("h2",c,[i,t(" "+o(n.$frontmatter.title),1)]),d])}const u=a(l,[["render",k],["__file","index.html.vue"]]);export{u as default};
