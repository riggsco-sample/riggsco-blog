async function getArticles(block) {
  fetch('/article-index.json')
    .then((response) => response.json())
    .then((articles) => {
      const list = document.createElement('ul');
      const fragment = document.createDocumentFragment();

      articles.data.forEach((result) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', result.path);
        a.textContent = result.title;
        li.append(a);
        fragment.append(li);
      });

      list.append(fragment);
      block.append(list);
    });
}

export default function decorate(block) {
  getArticles(block);
}
