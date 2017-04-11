<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function europa_menu_tree__menu_nexteuropa_service_links(&$variables) {
  return _europa_menu_tree_footer($variables['tree'], TRUE);
}

/**
 * Implements hook_preprocess_HOOK().
 */
function europa_menu_tree__menu_service_tools(&$variables) {
  return _europa_menu_tree_footer($variables['tree'], TRUE);
}

/**
 * Europa theme wrapper function for the EC menu links.
 *
 * @see theme_menu_tree()
 */
function europa_menu_tree__menu_nexteuropa_social_media(&$variables) {
  return _europa_menu_tree_footer($variables['tree'], TRUE);
}

/**
 * Europa theme wrapper function for the EC menu links.
 *
 * @see theme_menu_tree()
 */
function europa_menu_tree__menu_nexteuropa_inst_links(&$variables) {
  return _europa_menu_tree_footer($variables['tree']);
}

/**
 * Europa theme wrapper function for the EC menu links.
 *
 * @see theme_menu_tree()
 */
function europa_menu_tree__menu_nexteuropa_site_links(&$variables) {
  return _europa_menu_tree_footer($variables['tree']);
}

/**
 * Bootstrap theme wrapper function for the primary menu links.
 */
function europa_menu_tree__secondary(&$variables) {
  return '<ul class="menu nav navbar-nav secondary">' . $variables['tree'] . '</ul>';
}

/**
 * Create the needed wrapper for menus in the footer.
 */
function _europa_menu_tree_footer($tree, $inline = FALSE) {
  $classes[] = 'footer__menu';

  if ($inline) {
    $classes[] = 'ul-list-inline';
  }

  return '<ul class="' . implode(' ', $classes) . '">' . $tree . '</ul>';
}