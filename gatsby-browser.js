/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import './src/styles/base.scss'
import './src/styles/globals.scss'
import { Site } from './src/layouts'

export const wrapPageElement = ({ element }) => (
    <Site>
        { element }
    </Site>
)
