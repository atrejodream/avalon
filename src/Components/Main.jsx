const Main = () => {
  return (
    <main>
      Main
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
    </main>
  );
};

export default Main;

//<?php
///* Template Name: Шаблон сторінки ЧЛЕНІВ АСМУ */
//$stylesheet_directory_uri = get_stylesheet_directory_uri();
//$assets                   = $stylesheet_directory_uri . '/assets/';
//$id                       = get_the_ID();
//?>
//<?php get_header(); ?>
//<?php
//if ( $api_url = carbon_get_post_meta( $id, 'api_url' ) ):
//	if ( $data = get_members( $api_url ) ):
//		?>
//        <section class="section-members">
//            <div class="container_inner">
//                <div class="main_title">
//					<?php the_title(); ?>
//                </div>

//                <div class="members_frame">
//                    <div class="members_frame_head">
//                        <div class="member_line">
//                            <div class="member_line_cell num_cell">
//                                <div class="member_cell_title">№</div>
//                            </div>
//                            <div class="member_line_cell name_cell">
//                                <div class="member_cell_title">ПІБ</div>
//                            </div>
//                            <div class="member_line_cell description_cell">
//                                <div class="member_cell_title">Посада</div>
//                                <div class="members_search" >
//                                    <label>
//                                        <input type="text" name="" class="search-input-js" placeholder="Пошук членів"/>
//                                    </label>
//                                    <button>
//                                        <img src="<?php echo $assets; ?>img/search.svg" alt="ico"/>
//                                    </button>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                    <div class="members_frame_body scroll_block">
//                        <div class="member_lines">

//							<?php foreach ( $data as $k => $item ): $k ++; ?>

//                                <div class="member_line"
//                                     data-value="<?php echo $item['name'] ?> <?php echo $item['job'] ?>">
//                                    <div class="member_line_cell num_cell">
//										<?php echo $k < 10 ? '0' . $k : $k ?>
//                                    </div>
//                                    <div class="member_line_cell name_cell">
//                                        <p><?php echo $item['name'] ?></p>
//                                    </div>
//                                    <div class="member_line_cell description_cell">
//                                        <p><?php echo $item['job'] ?></p>
//                                    </div>
//                                </div>

//							<?php endforeach; ?>

//                            <div class="member_line not-found-member" style="display: none">
//                                <div class="member_line_cell num_cell">

//                                </div>
//                                <div class="member_line_cell name_cell">
//                                    <p>Не знайдено</p>
//                                </div>
//                                <div class="member_line_cell description_cell">
//                                    <p></p>
//                                </div>
//                            </div>

//                        </div>
//                    </div>
//                </div>

//            </div>
//        </section>
//	<?php endif; ?>
//<?php endif; ?>
//<?php $screens = carbon_get_post_meta( $id, 'screens' );
//if ( ! empty( $screens ) ) :
//	foreach ( $screens as $index => $screen ) :
//		if ( $screen['_type'] == 'screen_2' ) :
//			if ( ! $screen['screen_off'] ) :
//				?>
//                <section class="section-cta">
//                    <div class="container_inner">
//                        <div class="cta_block">
//                            <div class="cta_frame"
//                                 style="background:#033A99 url(<?php _u( $screen['image'] ); ?>) center/cover no-repeat;">
//                                <div class="cta_frame_content">
//                                    <div class="cta_frame_head">
//                                        <div class="main_title"><?php echo $screen['title']; ?></div>
//										<?php _t( $screen['text'] ); ?>
//                                    </div>
//                                    <a class="main_btn"
//                                       href="<?php echo $screen['button_url']; ?>">
//                                        <span><?php echo $screen['button_text']; ?></span>
//                                    </a>
//                                </div>
//                                <img class="cta_frame_img" src="<?php _u( $screen['image2'] ); ?>" alt="ico"/></div>
//                        </div>
//                    </div>
//                </section>

//			<?php
//			endif;
//        elseif ( $screen['_type'] == 'screen_3' ):
//			if ( ! $screen['screen_off'] ):
//				?>
//                <section class="section-partners">
//                    <div class="container_inner">
//                        <div class="main_title text_center">
//							<?php echo $screen['title']; ?>
//                        </div>
//                        <div class="partner_blocks">
//							<?php $list = $screen['list'];
//							if ( ! empty( $list ) ) :
//								foreach ( $list as $item ) :
//									?>
//                                    <a class="partner_block" target="_blank" rel="nofollow"
//                                       href="<?php echo $item['url'] ?: ''; ?>">
//                                        <img src="<?php _u( $item['image'] ); ?>" alt="partner"/>
//                                    </a>
//								<?php endforeach;
//							endif; ?>
//                        </div>
//                    </div>
//                </section>
//			<?php
//			endif;
//		endif;
//	endforeach;
//endif; ?>
//<script>
//    document.addEventListener("DOMContentLoaded", function () {
//        jQuery(document).find('.header-button').removeClass('hidden');
//        jQuery(document).on('input', '.search-input-js', function (e) {
//            var $t = jQuery(this);
//            var val = $t.val() || '';
//            val = val.toLowerCase();
//            var $items = jQuery('.member_line[data-value]');
//            var $notFoundElement = jQuery(document).find('.not-found-member');
//            var count = $items.length;
//            if (val.length === 0) {
//                $items.show().removeClass('hidden');
//            }
//            $items.each(function () {
//                var $this = jQuery(this);
//                var _val = $this.attr('data-value') || '';
//                _val = _val.toLowerCase();
//                if (_val.indexOf(val) === -1) {
//                    $this.hide().addClass('hidden');
//                } else {
//                    $this.show().removeClass('hidden');
//                }
//            });
//            if (count === jQuery('.member_line[data-value].hidden').length) {
//                $notFoundElement.show();
//            } else {
//                $notFoundElement.hide();
//            }
//        });
//        if (jQuery(".scroll_block").length > 0) {
//            jQuery(".scroll_block").mCustomScrollbar({
//                theme: "my-theme"
//            });
//        }
//    });
//</script>
//<?php get_footer(); ?>
//*/
