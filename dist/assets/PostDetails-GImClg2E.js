import{a as c,r as b,u as x,j as e,S as u,m as f,L as w}from"./index-cRcuTVND.js";import{b as k,g as _,u as p,P as y,H as j}from"./HighlightPosts-Bw0gIwow.js";import{C as N}from"./clock-cbHpMvYy.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],M=c("arrow-left",v);/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],P=c("calendar-days",D);function q(t){return k({queryKey:["post",t],queryFn:async()=>{if(!t)throw new Error("Slug is required");const r=await _.get("/posts",{params:{slug:t,_embed:!0}});if(!r.data||r.data.length===0)throw new Error("Post not found");return r.data[0]},enabled:!!t,staleTime:1e3*60*10,retry:1})}function C(t){const{data:r}=p();return b.useMemo(()=>{if(!t)return null;const s=t._embedded?.author?.[0]?.name||"Autor desconhecido",l=t.categories.map(h=>r?.find(g=>g.id===h)?.name).filter(Boolean).join(", "),o=new Date(t.date||Date.now()),a=new Intl.DateTimeFormat("pt-BR",{day:"numeric",month:"long",year:"numeric"}).format(o),n=t._embedded?.["wp:featuredmedia"]?.[0]?.source_url,i=t.content.rendered.split(/\s+/).length,m=Math.ceil(i/200);return{authorName:s,categoryNames:l,formattedDate:a,featuredImage:n,readingTime:m}},[t,r])}function T(){const{slug:t}=x(),{data:r,isLoading:d,isError:s}=q(t),{data:l}=p(),o=C(r);if(d)return e.jsx(u,{message:"Carregando..."});if(s||!r)return e.jsx(y,{});const a=r.categories.map(n=>l?.find(i=>i.id===n)).filter(Boolean);return e.jsxs(f.article,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-[1128px] mx-auto py-4 px-4",children:[e.jsxs(w,{to:"/blog",className:"inline-flex items-center gap-2 text-green-accents-600 hover:text-green-accents-700 transition-colors pb-4 group",children:[e.jsx(M,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),e.jsx("span",{children:"Voltar ao Blog"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[570px_1fr] gap-32 pt-8",children:[e.jsxs("section",{children:[e.jsxs("header",{children:[a.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.map(n=>e.jsx("div",{className:"bg-[#1B1F24] inline-block p-2 text-[10px] leading-3 font-normal rounded",children:e.jsx("span",{className:"text-[10px] font-normal text-white leading-3 tracking-wide",children:n?.name})},n?.id))}),e.jsx("h1",{className:"text-2xl lg:text-2xl font-medium text-[#1B1F24] mb-6 leading-tight",dangerouslySetInnerHTML:{__html:r.title.rendered}}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-[#9CA3AF] pb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("time",{dateTime:r.date,children:o?.formattedDate})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsxs("span",{children:[o?.readingTime," min de leitura"]})]})]})]}),o?.featuredImage&&e.jsx("div",{className:"mb-8 overflow-hidden rounded-t-2xl shadow-lg",children:e.jsx("img",{src:o.featuredImage,alt:r.title.rendered,className:"w-full h-auto object-cover text-[#444D5A]"})}),e.jsx("div",{className:`pb-[120px] text-[#444D5A] prose prose-lg prose-neutral max-w-none\r
            prose-headings:font-bold prose-headings:text-neutral-900\r
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6\r
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4\r
            prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6\r
            prose-a:text-green-accents-600 prose-a:no-underline hover:prose-a:underline\r
            prose-strong:text-neutral-900 prose-strong:font-semibold\r
            prose-ul:my-6 prose-li:my-2\r
            prose-blockquote:border-l-4 prose-blockquote:border-green-accents-400 \r
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600\r
            prose-img:rounded-lg prose-img:shadow-md prose-img:my-8\r
            [&_.wp-block-heading]:text-green-accents-700 [&_.wp-block-heading]:font-semibold\r
            [&_.wp-block-heading]:relative\r
            [&_.wp-block-heading]:text-[16px]\r
            [&_.wp-block-heading]:before:text-[16px]\r
            [&_.wp-block-heading]:before:content-[''] [&_.wp-block-heading]:before:absolute\r
            [&_.wp-block-heading]:before:left-0 [&_.wp-block-heading]:before:top-1/2\r
            [&_.wp-block-heading]:before:-translate-y-1/2 [&_.wp-block-heading]:before:w-1\r
            [&_.wp-block-heading]:before:h-8\r
            [&_.wp-block-heading]:before:rounded-full\r
            [&_.wp-block-heading]:before:py-4\r
            [&_.wp-block-heading]:py-4\r
            [&_.wp-block-list]:list-none [&_.wp-block-list]:pl-4\r
            [&_.wp-block-list_li]:relative [&_.wp-block-list_li]:pl-3\r
            [&_.wp-block-list_li]:my-3\r
            [&_.wp-block-list_li]:flex\r
            [&_.wp-block-list_li]:items-center\r
            [&_.wp-block-list_li]:before:content-[''] [&_.wp-block-list_li]:before:absolute\r
            [&_.wp-block-list_li]:before:left-0 [&_.wp-block-list_li]:before:top-[0.6em]\r
            [&_.wp-block-list_li]:before:w-1 [&_.wp-block-list_li]:before:h-1\r
            [&_.wp-block-list_li]:before:bg-black [&_.wp-block-list_li]:before:rounded-full`,dangerouslySetInnerHTML:{__html:r.content.rendered}})]}),e.jsx("aside",{className:"hidden md:block pb-[120px]  lg:sticky lg:top-4 lg:h-fit",children:e.jsx(j,{})})]})]})}export{T as default};
