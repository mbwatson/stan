/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const publications = require('./src/data/publications.json')
const tags = require('./src/data/publicationTags.json')

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    // Create index page for listing all publications.
    createPage({
        path: `/publications`,
        component: path.resolve(`./src/templates/publications.js`),
        context: {
            allTags: tags,
            tag: null,
            publications: publications,
            count: publications.length,
        },
    })
    // Create pages for each tag in JSON file.
    tags.forEach(({ name, displayName }) => {
        const thisTagsPublications = publications.filter(publication => publication.tags.includes(name))
        createPage({
            path: `/publications/${ name }`,
            component: path.resolve(`./src/templates/publications.js`),
            context: {
                allTags: tags,
                tag: { name, displayName },
                publications: thisTagsPublications,
                count: thisTagsPublications.length,
            },
        })
    })
}