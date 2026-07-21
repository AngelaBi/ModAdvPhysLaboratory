const plugin = {
  name: "clickable-images",

  transforms: [
    {
      name: "wrap-images",
      stage: "document",

      plugin: () => (tree) => {
        function walk(node) {
          if (!node.children) return;

          node.children = node.children.map((child) => {
            if (child.type === "image") {
              return {
                type: "link",
                url: child.url,
                children: [child],
              };
            }

            walk(child);
            return child;
          });
        }

        walk(tree);

        return tree;
      },
    },
  ],
};

export default plugin;