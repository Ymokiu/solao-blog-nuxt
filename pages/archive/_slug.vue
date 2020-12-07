<template>
  <main class="main-inner">
    <div class="content-wrap">
      <section class="archive-wrap">
        <client-only>
          <DynamicMarkdown
            :render-func="renderFunc"
            :static-render-funcs="staticRenderFuncs"
            :extra-component="extraComponent"
          />
        </client-only>
      </section>
    </div>
  </main>
</template>

<script lang="js">
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue";

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/content/archive/${params.slug}.md`);
    const attr = fileContent.attributes;
    return {
      year: attr.year,
      id: attr.id,
      title: attr.title,
      extraComponent: attr.extraComponent,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`
    };
  },
  components: { DynamicMarkdown },
};
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}

code {
  padding: 2px 4px;
  word-wrap: break-word;
  border-radius: 3px;
  font-size: 13px;
}

.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  color: #030303;

  li code {
    color: #555;
    background: #eee;
  }

  > *:not(.datagrid):not(.image-placeholder) {
    max-width: 772px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  @media (min-width: 768px) {
    padding: 7.2rem 0;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    margin: 0 0 20px 0;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  a {
    color: #409eff;
    font-size: 16px;
    display: inline;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  ol {
    li {
      list-style-type: decimal;
      code {
        background: rgba(196, 196, 196, 0.05);
      }
    }
  }

  [type="checkbox"] {
    margin-right: 5px;
  }

  .toc-ul,
  .task-list-item {
    list-style: none;
  }

  blockquote p {
    margin: 0;
    border-color: #d6dbdf;
    background: none repeat scroll 0 0 rgba(102, 128, 153, 0.05);
    padding: 20px 15px;
    border-left-style: solid;
    border-left-width: 10px;
  }

  pre {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #2d2d2d;
    color: #ccc;
    padding: 38px;
    border-radius: 5px;
    overflow-x: auto;
    display: block;
    margin: 24px 0 24px 0;
  }

  code {
    display: inline;
    font-size: 14px;
    padding: 2px 4px;

    @media (min-width: 768px){
      font-size: 16px;
    }
  }

  .cb > li {
    list-style: none;
  }
}
</style>
