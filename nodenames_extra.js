var nodenames_extra = {

//
// PCM channel
//

// Bit counter

pcm_bits_next0:14194,
pcm_bits_next1:14232,
pcm_bits_next2:14273,
'/pcm_bits_next0':14185,
'/pcm_bits_next1':14227,
'/pcm_bits_next2':14266,

pcm_bits_carry_out0:11555,
pcm_bits_carry_out1:11565,
pcm_bits_carry_out2:11540,
'+pcm_bits_carry_out2':14177,
'+/pcm_bits_carry_out2':11389,
'+_pcm_bits_carry_out2':13850,

inc_pcm_bits:11538,

// Byte counter

pcm_lc_next0:14016,
pcm_lc_next1:13972,
pcm_lc_next2:13914,
pcm_lc_next3:13864,
pcm_lc_next4:13811,
pcm_lc_next5:13749,
pcm_lc_next6:13693,
pcm_lc_next7:13634,
pcm_lc_next8:13569,
pcm_lc_next9:13501,
pcm_lc_next10:13434,
pcm_lc_next11:13360,

pcm_lc_borrow0:11433,
pcm_lc_borrow1:11409,
pcm_lc_borrow2:11388,
pcm_lc_borrow3:11368,
pcm_lc_borrow4:11343,
pcm_lc_borrow5:11319,
pcm_lc_borrow6:11291,
pcm_lc_borrow7:11244,
pcm_lc_borrow8:11209,
pcm_lc_borrow9:11173,
pcm_lc_borrow10:11128,
pcm_lc_borrow11:11096,

// Timer

pcm_timer_eq_0:11541,
pcm_timer_eq_100000000:11539,
'/pcm_timer_eq_100000000':14171,
pcm_timer_eq_100000000_or_res:11524,
'/pcm_timer_eq_100000000_or_res':14157,

// Generated when the timer runs out
pcm_clock:11508,
'/pcm_clock':11382,

// Sample shift register

'+pcm_sr1':13351,
'+pcm_sr2':13424,
'+pcm_sr3':13493,
'+pcm_sr4':13561,
'+pcm_sr5':13630,
'+pcm_sr6':13686,
'+pcm_sr7':13741,

'pcm_+/sr0':13334, // Typo in nodenames.js

// Logic

pcm_clock_and_bits_remain:11102,
pcm_load_length_and_address:11092,
pcm_dec_length_and_inc_addr:11097,

// Misc.

'apu_/clk2e':14148,

}

for (var extra_node in nodenames_extra) {
    // Prefer own versions
    for (var node in nodenames)
        if (nodenames[node] == nodenames_extra[extra_node])
            delete nodenames[node]

    nodenames[extra_node] = nodenames_extra[extra_node]
}
