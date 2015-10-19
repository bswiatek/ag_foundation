<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>
<div class="<?php print $classes; ?>">
    <?php print render($title_prefix); ?>
    <?php if ($title): ?>
        <?php print $title; ?>
    <?php endif; ?>
    <?php print render($title_suffix); ?>
    <?php if ($header): ?>
        <div class="view-header">
            <?php print $header; ?>
        </div>
    <?php endif; ?>

    <div class="kolekcja-view-header row">
        <div class="sort-view-title column large-2 small-6">Kolekcja</div>
        <div class="search-box column large-3 small-6 right">
            <input type="search" placeholder="Wyszukaj" class="filter__search js-shuffle-search">
        </div>
        <div class="sorting column large-7 small-12">
            <span class="sort-label">Sortowanie:</span>
            <div class="sorting-box">
                <a href="#" class="sort-option-head">Alfabetycznie</a>
                <div class="sort-options">
                    <a href="#" class="sort-option" type="sort-title-asc">A-Z</a>
                    <a href="#" class="sort-option" type="sort-title-desc">Z-A</a>
                </div>
            </div>
            <div class="sorting-box">
                <a href="#" class="sort-option-head">Rok powstania</a>
                <div class="sort-options">
                    <a href="#" class="sort-option" type="sort-year-asc">1964&and;</a>
                    <a href="#" class="sort-option" type="sort-year-desc">2015&or;</a>
                </div>
            </div>
        </div>
    </div>

    <?php if ($exposed): ?>
        <div class="view-filters">
            <?php print $exposed; ?>
        </div>
    <?php endif; ?>

    <?php if ($attachment_before): ?>
        <div class="attachment attachment-before">
            <?php print $attachment_before; ?>
        </div>
    <?php endif; ?>

    <?php if ($rows): ?>
        <div class="view-content">
            <?php print $rows; ?>
        </div>
    <?php elseif ($empty): ?>
        <div class="view-empty">
            <?php print $empty; ?>
        </div>
    <?php endif; ?>

    <?php if ($pager): ?>
        <?php print $pager; ?>
    <?php endif; ?>

    <?php if ($attachment_after): ?>
        <div class="attachment attachment-after">
            <?php print $attachment_after; ?>
        </div>
    <?php endif; ?>

    <?php if ($more): ?>
        <?php print $more; ?>
    <?php endif; ?>

    <?php if ($footer): ?>
        <div class="view-footer">
            <?php print $footer; ?>
        </div>
    <?php endif; ?>

    <?php if ($feed_icon): ?>
        <div class="feed-icon">
            <?php print $feed_icon; ?>
        </div>
    <?php endif; ?>

</div><?php /* class view */ ?>
