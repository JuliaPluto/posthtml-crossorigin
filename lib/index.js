'use strict';

module.exports = function ({
  value = (_src, current_crossorigin, _node) => current_crossorigin
}) {
  function posthtmlCrossorigin(tree) {
    const parseAttr = attr => node => {
      const src = node.attrs[attr];

	  const result = value(src, node.attrs.crossorigin, node);
	  node.attrs.crossorigin = result;
      return node;
    };

    tree.match({tag: 'script', attrs: {src: /.*/}}, parseAttr('src'));
    tree.match({tag: 'link', attrs: {href: /.*/}}, parseAttr('href'));
    return tree;
  }

  return posthtmlCrossorigin;
};
