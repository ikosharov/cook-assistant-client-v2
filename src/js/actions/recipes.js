import { createActions } from './utils'

const actionTypes = {
  FETCH_RECIPES: 'FETCH_RECIPES',
  FETCH_RECIPES_SUCCESS: 'FETCH_RECIPES_SUCCESS',
  FETCH_RECIPES_FAILURE: 'FETCH_RECIPES_FAILURE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
