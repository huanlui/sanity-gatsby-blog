export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eac3d32c032685e4c5a4c60',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9eoc4rj2',
                  apiId: '2640f7da-259f-4697-a618-36cc786e88d4'
                },
                {
                  buildHookId: '5eac3d327b6cc3f4c571f377',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u8n5ifww',
                  apiId: '8cb7b4a8-b325-42e8-99b6-546a6ee702a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huanlui/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u8n5ifww.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
