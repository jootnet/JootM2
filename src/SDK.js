// 8位图片调色板（整幅图所有颜色个数不超过256个，查看BMP文件格式中的对应描述）
// 每个颜色4个分量RGBA
const Palletes = new Array(256);
Palletes[0] = new Uint8Array(4);
Palletes[0][0] = 0;
Palletes[0][1] = 0;
Palletes[0][2] = 0;
Palletes[0][3] = 0;
Palletes[1] = new Uint8Array(4);
Palletes[1][0] = -1;
Palletes[1][1] = -128;
Palletes[1][2] = 0;
Palletes[1][3] = 0;
Palletes[2] = new Uint8Array(4);
Palletes[2][0] = -1;
Palletes[2][1] = 0;
Palletes[2][2] = -128;
Palletes[2][3] = 0;
Palletes[3] = new Uint8Array(4);
Palletes[3][0] = -1;
Palletes[3][1] = -128;
Palletes[3][2] = -128;
Palletes[3][3] = 0;
Palletes[4] = new Uint8Array(4);
Palletes[4][0] = -1;
Palletes[4][1] = 0;
Palletes[4][2] = 0;
Palletes[4][3] = -128;
Palletes[5] = new Uint8Array(4);
Palletes[5][0] = -1;
Palletes[5][1] = -128;
Palletes[5][2] = 0;
Palletes[5][3] = -128;
Palletes[6] = new Uint8Array(4);
Palletes[6][0] = -1;
Palletes[6][1] = 0;
Palletes[6][2] = -128;
Palletes[6][3] = -128;
Palletes[7] = new Uint8Array(4);
Palletes[7][0] = -1;
Palletes[7][1] = -64;
Palletes[7][2] = -64;
Palletes[7][3] = -64;
Palletes[8] = new Uint8Array(4);
Palletes[8][0] = -1;
Palletes[8][1] = 85;
Palletes[8][2] = -128;
Palletes[8][3] = -105;
Palletes[9] = new Uint8Array(4);
Palletes[9][0] = -1;
Palletes[9][1] = -99;
Palletes[9][2] = -71;
Palletes[9][3] = -56;
Palletes[10] = new Uint8Array(4);
Palletes[10][0] = -1;
Palletes[10][1] = 123;
Palletes[10][2] = 115;
Palletes[10][3] = 115;
Palletes[11] = new Uint8Array(4);
Palletes[11][0] = -1;
Palletes[11][1] = 45;
Palletes[11][2] = 41;
Palletes[11][3] = 41;
Palletes[12] = new Uint8Array(4);
Palletes[12][0] = -1;
Palletes[12][1] = 90;
Palletes[12][2] = 82;
Palletes[12][3] = 82;
Palletes[13] = new Uint8Array(4);
Palletes[13][0] = -1;
Palletes[13][1] = 99;
Palletes[13][2] = 90;
Palletes[13][3] = 90;
Palletes[14] = new Uint8Array(4);
Palletes[14][0] = -1;
Palletes[14][1] = 66;
Palletes[14][2] = 57;
Palletes[14][3] = 57;
Palletes[15] = new Uint8Array(4);
Palletes[15][0] = -1;
Palletes[15][1] = 29;
Palletes[15][2] = 24;
Palletes[15][3] = 24;
Palletes[16] = new Uint8Array(4);
Palletes[16][0] = -1;
Palletes[16][1] = 24;
Palletes[16][2] = 16;
Palletes[16][3] = 16;
Palletes[17] = new Uint8Array(4);
Palletes[17][0] = -1;
Palletes[17][1] = 41;
Palletes[17][2] = 24;
Palletes[17][3] = 24;
Palletes[18] = new Uint8Array(4);
Palletes[18][0] = -1;
Palletes[18][1] = 16;
Palletes[18][2] = 8;
Palletes[18][3] = 8;
Palletes[19] = new Uint8Array(4);
Palletes[19][0] = -1;
Palletes[19][1] = -14;
Palletes[19][2] = 121;
Palletes[19][3] = 113;
Palletes[20] = new Uint8Array(4);
Palletes[20][0] = -1;
Palletes[20][1] = -31;
Palletes[20][2] = 103;
Palletes[20][3] = 95;
Palletes[21] = new Uint8Array(4);
Palletes[21][0] = -1;
Palletes[21][1] = -1;
Palletes[21][2] = 90;
Palletes[21][3] = 90;
Palletes[22] = new Uint8Array(4);
Palletes[22][0] = -1;
Palletes[22][1] = -1;
Palletes[22][2] = 49;
Palletes[22][3] = 49;
Palletes[23] = new Uint8Array(4);
Palletes[23][0] = -1;
Palletes[23][1] = -42;
Palletes[23][2] = 90;
Palletes[23][3] = 82;
Palletes[24] = new Uint8Array(4);
Palletes[24][0] = -1;
Palletes[24][1] = -108;
Palletes[24][2] = 16;
Palletes[24][3] = 0;
Palletes[25] = new Uint8Array(4);
Palletes[25][0] = -1;
Palletes[25][1] = -108;
Palletes[25][2] = 41;
Palletes[25][3] = 24;
Palletes[26] = new Uint8Array(4);
Palletes[26][0] = -1;
Palletes[26][1] = 57;
Palletes[26][2] = 8;
Palletes[26][3] = 0;
Palletes[27] = new Uint8Array(4);
Palletes[27][0] = -1;
Palletes[27][1] = 115;
Palletes[27][2] = 16;
Palletes[27][3] = 0;
Palletes[28] = new Uint8Array(4);
Palletes[28][0] = -1;
Palletes[28][1] = -75;
Palletes[28][2] = 24;
Palletes[28][3] = 0;
Palletes[29] = new Uint8Array(4);
Palletes[29][0] = -1;
Palletes[29][1] = -67;
Palletes[29][2] = 99;
Palletes[29][3] = 82;
Palletes[30] = new Uint8Array(4);
Palletes[30][0] = -1;
Palletes[30][1] = 66;
Palletes[30][2] = 24;
Palletes[30][3] = 16;
Palletes[31] = new Uint8Array(4);
Palletes[31][0] = -1;
Palletes[31][1] = -1;
Palletes[31][2] = -86;
Palletes[31][3] = -103;
Palletes[32] = new Uint8Array(4);
Palletes[32][0] = -1;
Palletes[32][1] = 90;
Palletes[32][2] = 16;
Palletes[32][3] = 0;
Palletes[33] = new Uint8Array(4);
Palletes[33][0] = -1;
Palletes[33][1] = 115;
Palletes[33][2] = 57;
Palletes[33][3] = 41;
Palletes[34] = new Uint8Array(4);
Palletes[34][0] = -1;
Palletes[34][1] = -91;
Palletes[34][2] = 74;
Palletes[34][3] = 49;
Palletes[35] = new Uint8Array(4);
Palletes[35][0] = -1;
Palletes[35][1] = -108;
Palletes[35][2] = 123;
Palletes[35][3] = 115;
Palletes[36] = new Uint8Array(4);
Palletes[36][0] = -1;
Palletes[36][1] = -67;
Palletes[36][2] = 82;
Palletes[36][3] = 49;
Palletes[37] = new Uint8Array(4);
Palletes[37][0] = -1;
Palletes[37][1] = 82;
Palletes[37][2] = 33;
Palletes[37][3] = 16;
Palletes[38] = new Uint8Array(4);
Palletes[38][0] = -1;
Palletes[38][1] = 123;
Palletes[38][2] = 49;
Palletes[38][3] = 24;
Palletes[39] = new Uint8Array(4);
Palletes[39][0] = -1;
Palletes[39][1] = 45;
Palletes[39][2] = 24;
Palletes[39][3] = 16;
Palletes[40] = new Uint8Array(4);
Palletes[40][0] = -1;
Palletes[40][1] = -116;
Palletes[40][2] = 74;
Palletes[40][3] = 49;
Palletes[41] = new Uint8Array(4);
Palletes[41][0] = -1;
Palletes[41][1] = -108;
Palletes[41][2] = 41;
Palletes[41][3] = 0;
Palletes[42] = new Uint8Array(4);
Palletes[42][0] = -1;
Palletes[42][1] = -67;
Palletes[42][2] = 49;
Palletes[42][3] = 0;
Palletes[43] = new Uint8Array(4);
Palletes[43][0] = -1;
Palletes[43][1] = -58;
Palletes[43][2] = 115;
Palletes[43][3] = 82;
Palletes[44] = new Uint8Array(4);
Palletes[44][0] = -1;
Palletes[44][1] = 107;
Palletes[44][2] = 49;
Palletes[44][3] = 24;
Palletes[45] = new Uint8Array(4);
Palletes[45][0] = -1;
Palletes[45][1] = -58;
Palletes[45][2] = 107;
Palletes[45][3] = 66;
Palletes[46] = new Uint8Array(4);
Palletes[46][0] = -1;
Palletes[46][1] = -50;
Palletes[46][2] = 74;
Palletes[46][3] = 0;
Palletes[47] = new Uint8Array(4);
Palletes[47][0] = -1;
Palletes[47][1] = -91;
Palletes[47][2] = 99;
Palletes[47][3] = 57;
Palletes[48] = new Uint8Array(4);
Palletes[48][0] = -1;
Palletes[48][1] = 90;
Palletes[48][2] = 49;
Palletes[48][3] = 24;
Palletes[49] = new Uint8Array(4);
Palletes[49][0] = -1;
Palletes[49][1] = 42;
Palletes[49][2] = 16;
Palletes[49][3] = 0;
Palletes[50] = new Uint8Array(4);
Palletes[50][0] = -1;
Palletes[50][1] = 21;
Palletes[50][2] = 8;
Palletes[50][3] = 0;
Palletes[51] = new Uint8Array(4);
Palletes[51][0] = -1;
Palletes[51][1] = 58;
Palletes[51][2] = 24;
Palletes[51][3] = 0;
Palletes[52] = new Uint8Array(4);
Palletes[52][0] = -1;
Palletes[52][1] = 8;
Palletes[52][2] = 0;
Palletes[52][3] = 0;
Palletes[53] = new Uint8Array(4);
Palletes[53][0] = -1;
Palletes[53][1] = 41;
Palletes[53][2] = 0;
Palletes[53][3] = 0;
Palletes[54] = new Uint8Array(4);
Palletes[54][0] = -1;
Palletes[54][1] = 74;
Palletes[54][2] = 0;
Palletes[54][3] = 0;
Palletes[55] = new Uint8Array(4);
Palletes[55][0] = -1;
Palletes[55][1] = -99;
Palletes[55][2] = 0;
Palletes[55][3] = 0;
Palletes[56] = new Uint8Array(4);
Palletes[56][0] = -1;
Palletes[56][1] = -36;
Palletes[56][2] = 0;
Palletes[56][3] = 0;
Palletes[57] = new Uint8Array(4);
Palletes[57][0] = -1;
Palletes[57][1] = -34;
Palletes[57][2] = 0;
Palletes[57][3] = 0;
Palletes[58] = new Uint8Array(4);
Palletes[58][0] = -1;
Palletes[58][1] = -5;
Palletes[58][2] = 0;
Palletes[58][3] = 0;
Palletes[59] = new Uint8Array(4);
Palletes[59][0] = -1;
Palletes[59][1] = -100;
Palletes[59][2] = 115;
Palletes[59][3] = 82;
Palletes[60] = new Uint8Array(4);
Palletes[60][0] = -1;
Palletes[60][1] = -108;
Palletes[60][2] = 107;
Palletes[60][3] = 74;
Palletes[61] = new Uint8Array(4);
Palletes[61][0] = -1;
Palletes[61][1] = 115;
Palletes[61][2] = 74;
Palletes[61][3] = 41;
Palletes[62] = new Uint8Array(4);
Palletes[62][0] = -1;
Palletes[62][1] = 82;
Palletes[62][2] = 49;
Palletes[62][3] = 24;
Palletes[63] = new Uint8Array(4);
Palletes[63][0] = -1;
Palletes[63][1] = -116;
Palletes[63][2] = 74;
Palletes[63][3] = 24;
Palletes[64] = new Uint8Array(4);
Palletes[64][0] = -1;
Palletes[64][1] = -120;
Palletes[64][2] = 68;
Palletes[64][3] = 17;
Palletes[65] = new Uint8Array(4);
Palletes[65][0] = -1;
Palletes[65][1] = 74;
Palletes[65][2] = 33;
Palletes[65][3] = 0;
Palletes[66] = new Uint8Array(4);
Palletes[66][0] = -1;
Palletes[66][1] = 33;
Palletes[66][2] = 24;
Palletes[66][3] = 16;
Palletes[67] = new Uint8Array(4);
Palletes[67][0] = -1;
Palletes[67][1] = -42;
Palletes[67][2] = -108;
Palletes[67][3] = 90;
Palletes[68] = new Uint8Array(4);
Palletes[68][0] = -1;
Palletes[68][1] = -58;
Palletes[68][2] = 107;
Palletes[68][3] = 33;
Palletes[69] = new Uint8Array(4);
Palletes[69][0] = -1;
Palletes[69][1] = -17;
Palletes[69][2] = 107;
Palletes[69][3] = 0;
Palletes[70] = new Uint8Array(4);
Palletes[70][0] = -1;
Palletes[70][1] = -1;
Palletes[70][2] = 119;
Palletes[70][3] = 0;
Palletes[71] = new Uint8Array(4);
Palletes[71][0] = -1;
Palletes[71][1] = -91;
Palletes[71][2] = -108;
Palletes[71][3] = -124;
Palletes[72] = new Uint8Array(4);
Palletes[72][0] = -1;
Palletes[72][1] = 66;
Palletes[72][2] = 49;
Palletes[72][3] = 33;
Palletes[73] = new Uint8Array(4);
Palletes[73][0] = -1;
Palletes[73][1] = 24;
Palletes[73][2] = 16;
Palletes[73][3] = 8;
Palletes[74] = new Uint8Array(4);
Palletes[74][0] = -1;
Palletes[74][1] = 41;
Palletes[74][2] = 24;
Palletes[74][3] = 8;
Palletes[75] = new Uint8Array(4);
Palletes[75][0] = -1;
Palletes[75][1] = 33;
Palletes[75][2] = 16;
Palletes[75][3] = 0;
Palletes[76] = new Uint8Array(4);
Palletes[76][0] = -1;
Palletes[76][1] = 57;
Palletes[76][2] = 41;
Palletes[76][3] = 24;
Palletes[77] = new Uint8Array(4);
Palletes[77][0] = -1;
Palletes[77][1] = -116;
Palletes[77][2] = 99;
Palletes[77][3] = 57;
Palletes[78] = new Uint8Array(4);
Palletes[78][0] = -1;
Palletes[78][1] = 66;
Palletes[78][2] = 41;
Palletes[78][3] = 16;
Palletes[79] = new Uint8Array(4);
Palletes[79][0] = -1;
Palletes[79][1] = 107;
Palletes[79][2] = 66;
Palletes[79][3] = 24;
Palletes[80] = new Uint8Array(4);
Palletes[80][0] = -1;
Palletes[80][1] = 123;
Palletes[80][2] = 74;
Palletes[80][3] = 24;
Palletes[81] = new Uint8Array(4);
Palletes[81][0] = -1;
Palletes[81][1] = -108;
Palletes[81][2] = 74;
Palletes[81][3] = 0;
Palletes[82] = new Uint8Array(4);
Palletes[82][0] = -1;
Palletes[82][1] = -116;
Palletes[82][2] = -124;
Palletes[82][3] = 123;
Palletes[83] = new Uint8Array(4);
Palletes[83][0] = -1;
Palletes[83][1] = 107;
Palletes[83][2] = 99;
Palletes[83][3] = 90;
Palletes[84] = new Uint8Array(4);
Palletes[84][0] = -1;
Palletes[84][1] = 74;
Palletes[84][2] = 66;
Palletes[84][3] = 57;
Palletes[85] = new Uint8Array(4);
Palletes[85][0] = -1;
Palletes[85][1] = 41;
Palletes[85][2] = 33;
Palletes[85][3] = 24;
Palletes[86] = new Uint8Array(4);
Palletes[86][0] = -1;
Palletes[86][1] = 70;
Palletes[86][2] = 57;
Palletes[86][3] = 41;
Palletes[87] = new Uint8Array(4);
Palletes[87][0] = -1;
Palletes[87][1] = -75;
Palletes[87][2] = -91;
Palletes[87][3] = -108;
Palletes[88] = new Uint8Array(4);
Palletes[88][0] = -1;
Palletes[88][1] = 123;
Palletes[88][2] = 107;
Palletes[88][3] = 90;
Palletes[89] = new Uint8Array(4);
Palletes[89][0] = -1;
Palletes[89][1] = -50;
Palletes[89][2] = -79;
Palletes[89][3] = -108;
Palletes[90] = new Uint8Array(4);
Palletes[90][0] = -1;
Palletes[90][1] = -91;
Palletes[90][2] = -116;
Palletes[90][3] = 115;
Palletes[91] = new Uint8Array(4);
Palletes[91][0] = -1;
Palletes[91][1] = -116;
Palletes[91][2] = 115;
Palletes[91][3] = 90;
Palletes[92] = new Uint8Array(4);
Palletes[92][0] = -1;
Palletes[92][1] = -75;
Palletes[92][2] = -108;
Palletes[92][3] = 115;
Palletes[93] = new Uint8Array(4);
Palletes[93][0] = -1;
Palletes[93][1] = -42;
Palletes[93][2] = -91;
Palletes[93][3] = 115;
Palletes[94] = new Uint8Array(4);
Palletes[94][0] = -1;
Palletes[94][1] = -17;
Palletes[94][2] = -91;
Palletes[94][3] = 74;
Palletes[95] = new Uint8Array(4);
Palletes[95][0] = -1;
Palletes[95][1] = -17;
Palletes[95][2] = -58;
Palletes[95][3] = -116;
Palletes[96] = new Uint8Array(4);
Palletes[96][0] = -1;
Palletes[96][1] = 123;
Palletes[96][2] = 99;
Palletes[96][3] = 66;
Palletes[97] = new Uint8Array(4);
Palletes[97][0] = -1;
Palletes[97][1] = 107;
Palletes[97][2] = 86;
Palletes[97][3] = 57;
Palletes[98] = new Uint8Array(4);
Palletes[98][0] = -1;
Palletes[98][1] = -67;
Palletes[98][2] = -108;
Palletes[98][3] = 90;
Palletes[99] = new Uint8Array(4);
Palletes[99][0] = -1;
Palletes[99][1] = 99;
Palletes[99][2] = 57;
Palletes[99][3] = 0;
Palletes[100] = new Uint8Array(4);
Palletes[100][0] = -1;
Palletes[100][1] = -42;
Palletes[100][2] = -58;
Palletes[100][3] = -83;
Palletes[101] = new Uint8Array(4);
Palletes[101][0] = -1;
Palletes[101][1] = 82;
Palletes[101][2] = 66;
Palletes[101][3] = 41;
Palletes[102] = new Uint8Array(4);
Palletes[102][0] = -1;
Palletes[102][1] = -108;
Palletes[102][2] = 99;
Palletes[102][3] = 24;
Palletes[103] = new Uint8Array(4);
Palletes[103][0] = -1;
Palletes[103][1] = -17;
Palletes[103][2] = -42;
Palletes[103][3] = -83;
Palletes[104] = new Uint8Array(4);
Palletes[104][0] = -1;
Palletes[104][1] = -91;
Palletes[104][2] = -116;
Palletes[104][3] = 99;
Palletes[105] = new Uint8Array(4);
Palletes[105][0] = -1;
Palletes[105][1] = 99;
Palletes[105][2] = 90;
Palletes[105][3] = 74;
Palletes[106] = new Uint8Array(4);
Palletes[106][0] = -1;
Palletes[106][1] = -67;
Palletes[106][2] = -91;
Palletes[106][3] = 123;
Palletes[107] = new Uint8Array(4);
Palletes[107][0] = -1;
Palletes[107][1] = 90;
Palletes[107][2] = 66;
Palletes[107][3] = 24;
Palletes[108] = new Uint8Array(4);
Palletes[108][0] = -1;
Palletes[108][1] = -67;
Palletes[108][2] = -116;
Palletes[108][3] = 49;
Palletes[109] = new Uint8Array(4);
Palletes[109][0] = -1;
Palletes[109][1] = 53;
Palletes[109][2] = 49;
Palletes[109][3] = 41;
Palletes[110] = new Uint8Array(4);
Palletes[110][0] = -1;
Palletes[110][1] = -108;
Palletes[110][2] = -124;
Palletes[110][3] = 99;
Palletes[111] = new Uint8Array(4);
Palletes[111][0] = -1;
Palletes[111][1] = 123;
Palletes[111][2] = 107;
Palletes[111][3] = 74;
Palletes[112] = new Uint8Array(4);
Palletes[112][0] = -1;
Palletes[112][1] = -91;
Palletes[112][2] = -116;
Palletes[112][3] = 90;
Palletes[113] = new Uint8Array(4);
Palletes[113][0] = -1;
Palletes[113][1] = 90;
Palletes[113][2] = 74;
Palletes[113][3] = 41;
Palletes[114] = new Uint8Array(4);
Palletes[114][0] = -1;
Palletes[114][1] = -100;
Palletes[114][2] = 123;
Palletes[114][3] = 57;
Palletes[115] = new Uint8Array(4);
Palletes[115][0] = -1;
Palletes[115][1] = 66;
Palletes[115][2] = 49;
Palletes[115][3] = 16;
Palletes[116] = new Uint8Array(4);
Palletes[116][0] = -1;
Palletes[116][1] = -17;
Palletes[116][2] = -83;
Palletes[116][3] = 33;
Palletes[117] = new Uint8Array(4);
Palletes[117][0] = -1;
Palletes[117][1] = 24;
Palletes[117][2] = 16;
Palletes[117][3] = 0;
Palletes[118] = new Uint8Array(4);
Palletes[118][0] = -1;
Palletes[118][1] = 41;
Palletes[118][2] = 33;
Palletes[118][3] = 0;
Palletes[119] = new Uint8Array(4);
Palletes[119][0] = -1;
Palletes[119][1] = -100;
Palletes[119][2] = 107;
Palletes[119][3] = 0;
Palletes[120] = new Uint8Array(4);
Palletes[120][0] = -1;
Palletes[120][1] = -108;
Palletes[120][2] = -124;
Palletes[120][3] = 90;
Palletes[121] = new Uint8Array(4);
Palletes[121][0] = -1;
Palletes[121][1] = 82;
Palletes[121][2] = 66;
Palletes[121][3] = 24;
Palletes[122] = new Uint8Array(4);
Palletes[122][0] = -1;
Palletes[122][1] = 107;
Palletes[122][2] = 90;
Palletes[122][3] = 41;
Palletes[123] = new Uint8Array(4);
Palletes[123][0] = -1;
Palletes[123][1] = 123;
Palletes[123][2] = 99;
Palletes[123][3] = 33;
Palletes[124] = new Uint8Array(4);
Palletes[124][0] = -1;
Palletes[124][1] = -100;
Palletes[124][2] = 123;
Palletes[124][3] = 33;
Palletes[125] = new Uint8Array(4);
Palletes[125][0] = -1;
Palletes[125][1] = -34;
Palletes[125][2] = -91;
Palletes[125][3] = 0;
Palletes[126] = new Uint8Array(4);
Palletes[126][0] = -1;
Palletes[126][1] = 90;
Palletes[126][2] = 82;
Palletes[126][3] = 57;
Palletes[127] = new Uint8Array(4);
Palletes[127][0] = -1;
Palletes[127][1] = 49;
Palletes[127][2] = 41;
Palletes[127][3] = 16;
Palletes[128] = new Uint8Array(4);
Palletes[128][0] = -1;
Palletes[128][1] = -50;
Palletes[128][2] = -67;
Palletes[128][3] = 123;
Palletes[129] = new Uint8Array(4);
Palletes[129][0] = -1;
Palletes[129][1] = 99;
Palletes[129][2] = 90;
Palletes[129][3] = 57;
Palletes[130] = new Uint8Array(4);
Palletes[130][0] = -1;
Palletes[130][1] = -108;
Palletes[130][2] = -124;
Palletes[130][3] = 74;
Palletes[131] = new Uint8Array(4);
Palletes[131][0] = -1;
Palletes[131][1] = -58;
Palletes[131][2] = -91;
Palletes[131][3] = 41;
Palletes[132] = new Uint8Array(4);
Palletes[132][0] = -1;
Palletes[132][1] = 16;
Palletes[132][2] = -100;
Palletes[132][3] = 24;
Palletes[133] = new Uint8Array(4);
Palletes[133][0] = -1;
Palletes[133][1] = 66;
Palletes[133][2] = -116;
Palletes[133][3] = 74;
Palletes[134] = new Uint8Array(4);
Palletes[134][0] = -1;
Palletes[134][1] = 49;
Palletes[134][2] = -116;
Palletes[134][3] = 66;
Palletes[135] = new Uint8Array(4);
Palletes[135][0] = -1;
Palletes[135][1] = 16;
Palletes[135][2] = -108;
Palletes[135][3] = 41;
Palletes[136] = new Uint8Array(4);
Palletes[136][0] = -1;
Palletes[136][1] = 8;
Palletes[136][2] = 24;
Palletes[136][3] = 16;
Palletes[137] = new Uint8Array(4);
Palletes[137][0] = -1;
Palletes[137][1] = 8;
Palletes[137][2] = 24;
Palletes[137][3] = 24;
Palletes[138] = new Uint8Array(4);
Palletes[138][0] = -1;
Palletes[138][1] = 8;
Palletes[138][2] = 41;
Palletes[138][3] = 16;
Palletes[139] = new Uint8Array(4);
Palletes[139][0] = -1;
Palletes[139][1] = 24;
Palletes[139][2] = 66;
Palletes[139][3] = 41;
Palletes[140] = new Uint8Array(4);
Palletes[140][0] = -1;
Palletes[140][1] = -91;
Palletes[140][2] = -75;
Palletes[140][3] = -83;
Palletes[141] = new Uint8Array(4);
Palletes[141][0] = -1;
Palletes[141][1] = 107;
Palletes[141][2] = 115;
Palletes[141][3] = 115;
Palletes[142] = new Uint8Array(4);
Palletes[142][0] = -1;
Palletes[142][1] = 24;
Palletes[142][2] = 41;
Palletes[142][3] = 41;
Palletes[143] = new Uint8Array(4);
Palletes[143][0] = -1;
Palletes[143][1] = 24;
Palletes[143][2] = 66;
Palletes[143][3] = 74;
Palletes[144] = new Uint8Array(4);
Palletes[144][0] = -1;
Palletes[144][1] = 49;
Palletes[144][2] = 66;
Palletes[144][3] = 74;
Palletes[145] = new Uint8Array(4);
Palletes[145][0] = -1;
Palletes[145][1] = 99;
Palletes[145][2] = -58;
Palletes[145][3] = -34;
Palletes[146] = new Uint8Array(4);
Palletes[146][0] = -1;
Palletes[146][1] = 68;
Palletes[146][2] = -35;
Palletes[146][3] = -1;
Palletes[147] = new Uint8Array(4);
Palletes[147][0] = -1;
Palletes[147][1] = -116;
Palletes[147][2] = -42;
Palletes[147][3] = -17;
Palletes[148] = new Uint8Array(4);
Palletes[148][0] = -1;
Palletes[148][1] = 115;
Palletes[148][2] = 107;
Palletes[148][3] = 57;
Palletes[149] = new Uint8Array(4);
Palletes[149][0] = -1;
Palletes[149][1] = -9;
Palletes[149][2] = -34;
Palletes[149][3] = 57;
Palletes[150] = new Uint8Array(4);
Palletes[150][0] = -1;
Palletes[150][1] = -9;
Palletes[150][2] = -17;
Palletes[150][3] = -116;
Palletes[151] = new Uint8Array(4);
Palletes[151][0] = -1;
Palletes[151][1] = -9;
Palletes[151][2] = -25;
Palletes[151][3] = 0;
Palletes[152] = new Uint8Array(4);
Palletes[152][0] = -1;
Palletes[152][1] = 107;
Palletes[152][2] = 107;
Palletes[152][3] = 90;
Palletes[153] = new Uint8Array(4);
Palletes[153][0] = -1;
Palletes[153][1] = 90;
Palletes[153][2] = -116;
Palletes[153][3] = -91;
Palletes[154] = new Uint8Array(4);
Palletes[154][0] = -1;
Palletes[154][1] = 57;
Palletes[154][2] = -75;
Palletes[154][3] = -17;
Palletes[155] = new Uint8Array(4);
Palletes[155][0] = -1;
Palletes[155][1] = 74;
Palletes[155][2] = -100;
Palletes[155][3] = -50;
Palletes[156] = new Uint8Array(4);
Palletes[156][0] = -1;
Palletes[156][1] = 49;
Palletes[156][2] = -124;
Palletes[156][3] = -75;
Palletes[157] = new Uint8Array(4);
Palletes[157][0] = -1;
Palletes[157][1] = 49;
Palletes[157][2] = 82;
Palletes[157][3] = 107;
Palletes[158] = new Uint8Array(4);
Palletes[158][0] = -1;
Palletes[158][1] = -34;
Palletes[158][2] = -34;
Palletes[158][3] = -42;
Palletes[159] = new Uint8Array(4);
Palletes[159][0] = -1;
Palletes[159][1] = -67;
Palletes[159][2] = -67;
Palletes[159][3] = -75;
Palletes[160] = new Uint8Array(4);
Palletes[160][0] = -1;
Palletes[160][1] = -116;
Palletes[160][2] = -116;
Palletes[160][3] = -124;
Palletes[161] = new Uint8Array(4);
Palletes[161][0] = -1;
Palletes[161][1] = -9;
Palletes[161][2] = -9;
Palletes[161][3] = -34;
Palletes[162] = new Uint8Array(4);
Palletes[162][0] = -1;
Palletes[162][1] = 0;
Palletes[162][2] = 8;
Palletes[162][3] = 24;
Palletes[163] = new Uint8Array(4);
Palletes[163][0] = -1;
Palletes[163][1] = 8;
Palletes[163][2] = 24;
Palletes[163][3] = 57;
Palletes[164] = new Uint8Array(4);
Palletes[164][0] = -1;
Palletes[164][1] = 8;
Palletes[164][2] = 16;
Palletes[164][3] = 41;
Palletes[165] = new Uint8Array(4);
Palletes[165][0] = -1;
Palletes[165][1] = 8;
Palletes[165][2] = 24;
Palletes[165][3] = 0;
Palletes[166] = new Uint8Array(4);
Palletes[166][0] = -1;
Palletes[166][1] = 8;
Palletes[166][2] = 41;
Palletes[166][3] = 0;
Palletes[167] = new Uint8Array(4);
Palletes[167][0] = -1;
Palletes[167][1] = 0;
Palletes[167][2] = 82;
Palletes[167][3] = -91;
Palletes[168] = new Uint8Array(4);
Palletes[168][0] = -1;
Palletes[168][1] = 0;
Palletes[168][2] = 123;
Palletes[168][3] = -34;
Palletes[169] = new Uint8Array(4);
Palletes[169][0] = -1;
Palletes[169][1] = 16;
Palletes[169][2] = 41;
Palletes[169][3] = 74;
Palletes[170] = new Uint8Array(4);
Palletes[170][0] = -1;
Palletes[170][1] = 16;
Palletes[170][2] = 57;
Palletes[170][3] = 107;
Palletes[171] = new Uint8Array(4);
Palletes[171][0] = -1;
Palletes[171][1] = 16;
Palletes[171][2] = 82;
Palletes[171][3] = -116;
Palletes[172] = new Uint8Array(4);
Palletes[172][0] = -1;
Palletes[172][1] = 33;
Palletes[172][2] = 90;
Palletes[172][3] = -91;
Palletes[173] = new Uint8Array(4);
Palletes[173][0] = -1;
Palletes[173][1] = 16;
Palletes[173][2] = 49;
Palletes[173][3] = 90;
Palletes[174] = new Uint8Array(4);
Palletes[174][0] = -1;
Palletes[174][1] = 16;
Palletes[174][2] = 66;
Palletes[174][3] = -124;
Palletes[175] = new Uint8Array(4);
Palletes[175][0] = -1;
Palletes[175][1] = 49;
Palletes[175][2] = 82;
Palletes[175][3] = -124;
Palletes[176] = new Uint8Array(4);
Palletes[176][0] = -1;
Palletes[176][1] = 24;
Palletes[176][2] = 33;
Palletes[176][3] = 49;
Palletes[177] = new Uint8Array(4);
Palletes[177][0] = -1;
Palletes[177][1] = 74;
Palletes[177][2] = 90;
Palletes[177][3] = 123;
Palletes[178] = new Uint8Array(4);
Palletes[178][0] = -1;
Palletes[178][1] = 82;
Palletes[178][2] = 107;
Palletes[178][3] = -91;
Palletes[179] = new Uint8Array(4);
Palletes[179][0] = -1;
Palletes[179][1] = 41;
Palletes[179][2] = 57;
Palletes[179][3] = 99;
Palletes[180] = new Uint8Array(4);
Palletes[180][0] = -1;
Palletes[180][1] = 16;
Palletes[180][2] = 74;
Palletes[180][3] = -34;
Palletes[181] = new Uint8Array(4);
Palletes[181][0] = -1;
Palletes[181][1] = 41;
Palletes[181][2] = 41;
Palletes[181][3] = 33;
Palletes[182] = new Uint8Array(4);
Palletes[182][0] = -1;
Palletes[182][1] = 74;
Palletes[182][2] = 74;
Palletes[182][3] = 57;
Palletes[183] = new Uint8Array(4);
Palletes[183][0] = -1;
Palletes[183][1] = 41;
Palletes[183][2] = 41;
Palletes[183][3] = 24;
Palletes[184] = new Uint8Array(4);
Palletes[184][0] = -1;
Palletes[184][1] = 74;
Palletes[184][2] = 74;
Palletes[184][3] = 41;
Palletes[185] = new Uint8Array(4);
Palletes[185][0] = -1;
Palletes[185][1] = 123;
Palletes[185][2] = 123;
Palletes[185][3] = 66;
Palletes[186] = new Uint8Array(4);
Palletes[186][0] = -1;
Palletes[186][1] = -100;
Palletes[186][2] = -100;
Palletes[186][3] = 74;
Palletes[187] = new Uint8Array(4);
Palletes[187][0] = -1;
Palletes[187][1] = 90;
Palletes[187][2] = 90;
Palletes[187][3] = 41;
Palletes[188] = new Uint8Array(4);
Palletes[188][0] = -1;
Palletes[188][1] = 66;
Palletes[188][2] = 66;
Palletes[188][3] = 20;
Palletes[189] = new Uint8Array(4);
Palletes[189][0] = -1;
Palletes[189][1] = 57;
Palletes[189][2] = 57;
Palletes[189][3] = 0;
Palletes[190] = new Uint8Array(4);
Palletes[190][0] = -1;
Palletes[190][1] = 89;
Palletes[190][2] = 89;
Palletes[190][3] = 0;
Palletes[191] = new Uint8Array(4);
Palletes[191][0] = -1;
Palletes[191][1] = -54;
Palletes[191][2] = 53;
Palletes[191][3] = 44;
Palletes[192] = new Uint8Array(4);
Palletes[192][0] = -1;
Palletes[192][1] = 107;
Palletes[192][2] = 115;
Palletes[192][3] = 33;
Palletes[193] = new Uint8Array(4);
Palletes[193][0] = -1;
Palletes[193][1] = 41;
Palletes[193][2] = 49;
Palletes[193][3] = 0;
Palletes[194] = new Uint8Array(4);
Palletes[194][0] = -1;
Palletes[194][1] = 49;
Palletes[194][2] = 57;
Palletes[194][3] = 16;
Palletes[195] = new Uint8Array(4);
Palletes[195][0] = -1;
Palletes[195][1] = 49;
Palletes[195][2] = 57;
Palletes[195][3] = 24;
Palletes[196] = new Uint8Array(4);
Palletes[196][0] = -1;
Palletes[196][1] = 66;
Palletes[196][2] = 74;
Palletes[196][3] = 0;
Palletes[197] = new Uint8Array(4);
Palletes[197][0] = -1;
Palletes[197][1] = 82;
Palletes[197][2] = 99;
Palletes[197][3] = 24;
Palletes[198] = new Uint8Array(4);
Palletes[198][0] = -1;
Palletes[198][1] = 90;
Palletes[198][2] = 115;
Palletes[198][3] = 41;
Palletes[199] = new Uint8Array(4);
Palletes[199][0] = -1;
Palletes[199][1] = 49;
Palletes[199][2] = 74;
Palletes[199][3] = 24;
Palletes[200] = new Uint8Array(4);
Palletes[200][0] = -1;
Palletes[200][1] = 24;
Palletes[200][2] = 33;
Palletes[200][3] = 0;
Palletes[201] = new Uint8Array(4);
Palletes[201][0] = -1;
Palletes[201][1] = 24;
Palletes[201][2] = 49;
Palletes[201][3] = 0;
Palletes[202] = new Uint8Array(4);
Palletes[202][0] = -1;
Palletes[202][1] = 24;
Palletes[202][2] = 57;
Palletes[202][3] = 16;
Palletes[203] = new Uint8Array(4);
Palletes[203][0] = -1;
Palletes[203][1] = 99;
Palletes[203][2] = -124;
Palletes[203][3] = 74;
Palletes[204] = new Uint8Array(4);
Palletes[204][0] = -1;
Palletes[204][1] = 107;
Palletes[204][2] = -67;
Palletes[204][3] = 74;
Palletes[205] = new Uint8Array(4);
Palletes[205][0] = -1;
Palletes[205][1] = 99;
Palletes[205][2] = -75;
Palletes[205][3] = 74;
Palletes[206] = new Uint8Array(4);
Palletes[206][0] = -1;
Palletes[206][1] = 99;
Palletes[206][2] = -67;
Palletes[206][3] = 74;
Palletes[207] = new Uint8Array(4);
Palletes[207][0] = -1;
Palletes[207][1] = 90;
Palletes[207][2] = -100;
Palletes[207][3] = 74;
Palletes[208] = new Uint8Array(4);
Palletes[208][0] = -1;
Palletes[208][1] = 74;
Palletes[208][2] = -116;
Palletes[208][3] = 57;
Palletes[209] = new Uint8Array(4);
Palletes[209][0] = -1;
Palletes[209][1] = 99;
Palletes[209][2] = -58;
Palletes[209][3] = 74;
Palletes[210] = new Uint8Array(4);
Palletes[210][0] = -1;
Palletes[210][1] = 99;
Palletes[210][2] = -42;
Palletes[210][3] = 74;
Palletes[211] = new Uint8Array(4);
Palletes[211][0] = -1;
Palletes[211][1] = 82;
Palletes[211][2] = -124;
Palletes[211][3] = 74;
Palletes[212] = new Uint8Array(4);
Palletes[212][0] = -1;
Palletes[212][1] = 49;
Palletes[212][2] = 115;
Palletes[212][3] = 41;
Palletes[213] = new Uint8Array(4);
Palletes[213][0] = -1;
Palletes[213][1] = 99;
Palletes[213][2] = -58;
Palletes[213][3] = 90;
Palletes[214] = new Uint8Array(4);
Palletes[214][0] = -1;
Palletes[214][1] = 82;
Palletes[214][2] = -67;
Palletes[214][3] = 74;
Palletes[215] = new Uint8Array(4);
Palletes[215][0] = -1;
Palletes[215][1] = 16;
Palletes[215][2] = -1;
Palletes[215][3] = 0;
Palletes[216] = new Uint8Array(4);
Palletes[216][0] = -1;
Palletes[216][1] = 24;
Palletes[216][2] = 41;
Palletes[216][3] = 24;
Palletes[217] = new Uint8Array(4);
Palletes[217][0] = -1;
Palletes[217][1] = 74;
Palletes[217][2] = -120;
Palletes[217][3] = 74;
Palletes[218] = new Uint8Array(4);
Palletes[218][0] = -1;
Palletes[218][1] = 74;
Palletes[218][2] = -25;
Palletes[218][3] = 74;
Palletes[219] = new Uint8Array(4);
Palletes[219][0] = -1;
Palletes[219][1] = 0;
Palletes[219][2] = 90;
Palletes[219][3] = 0;
Palletes[220] = new Uint8Array(4);
Palletes[220][0] = -1;
Palletes[220][1] = 0;
Palletes[220][2] = -120;
Palletes[220][3] = 0;
Palletes[221] = new Uint8Array(4);
Palletes[221][0] = -1;
Palletes[221][1] = 0;
Palletes[221][2] = -108;
Palletes[221][3] = 0;
Palletes[222] = new Uint8Array(4);
Palletes[222][0] = -1;
Palletes[222][1] = 0;
Palletes[222][2] = -34;
Palletes[222][3] = 0;
Palletes[223] = new Uint8Array(4);
Palletes[223][0] = -1;
Palletes[223][1] = 0;
Palletes[223][2] = -18;
Palletes[223][3] = 0;
Palletes[224] = new Uint8Array(4);
Palletes[224][0] = -1;
Palletes[224][1] = 0;
Palletes[224][2] = -5;
Palletes[224][3] = 0;
Palletes[225] = new Uint8Array(4);
Palletes[225][0] = -1;
Palletes[225][1] = 74;
Palletes[225][2] = 90;
Palletes[225][3] = -108;
Palletes[226] = new Uint8Array(4);
Palletes[226][0] = -1;
Palletes[226][1] = 99;
Palletes[226][2] = 115;
Palletes[226][3] = -75;
Palletes[227] = new Uint8Array(4);
Palletes[227][0] = -1;
Palletes[227][1] = 123;
Palletes[227][2] = -116;
Palletes[227][3] = -42;
Palletes[228] = new Uint8Array(4);
Palletes[228][0] = -1;
Palletes[228][1] = 107;
Palletes[228][2] = 123;
Palletes[228][3] = -42;
Palletes[229] = new Uint8Array(4);
Palletes[229][0] = -1;
Palletes[229][1] = 119;
Palletes[229][2] = -120;
Palletes[229][3] = -1;
Palletes[230] = new Uint8Array(4);
Palletes[230][0] = -1;
Palletes[230][1] = -58;
Palletes[230][2] = -58;
Palletes[230][3] = -50;
Palletes[231] = new Uint8Array(4);
Palletes[231][0] = -1;
Palletes[231][1] = -108;
Palletes[231][2] = -108;
Palletes[231][3] = -100;
Palletes[232] = new Uint8Array(4);
Palletes[232][0] = -1;
Palletes[232][1] = -100;
Palletes[232][2] = -108;
Palletes[232][3] = -58;
Palletes[233] = new Uint8Array(4);
Palletes[233][0] = -1;
Palletes[233][1] = 49;
Palletes[233][2] = 49;
Palletes[233][3] = 57;
Palletes[234] = new Uint8Array(4);
Palletes[234][0] = -1;
Palletes[234][1] = 41;
Palletes[234][2] = 24;
Palletes[234][3] = -124;
Palletes[235] = new Uint8Array(4);
Palletes[235][0] = -1;
Palletes[235][1] = 24;
Palletes[235][2] = 0;
Palletes[235][3] = -124;
Palletes[236] = new Uint8Array(4);
Palletes[236][0] = -1;
Palletes[236][1] = 74;
Palletes[236][2] = 66;
Palletes[236][3] = 82;
Palletes[237] = new Uint8Array(4);
Palletes[237][0] = -1;
Palletes[237][1] = 82;
Palletes[237][2] = 66;
Palletes[237][3] = 123;
Palletes[238] = new Uint8Array(4);
Palletes[238][0] = -1;
Palletes[238][1] = 99;
Palletes[238][2] = 90;
Palletes[238][3] = 115;
Palletes[239] = new Uint8Array(4);
Palletes[239][0] = -1;
Palletes[239][1] = -50;
Palletes[239][2] = -75;
Palletes[239][3] = -9;
Palletes[240] = new Uint8Array(4);
Palletes[240][0] = -1;
Palletes[240][1] = -116;
Palletes[240][2] = 123;
Palletes[240][3] = -100;
Palletes[241] = new Uint8Array(4);
Palletes[241][0] = -1;
Palletes[241][1] = 119;
Palletes[241][2] = 34;
Palletes[241][3] = -52;
Palletes[242] = new Uint8Array(4);
Palletes[242][0] = -1;
Palletes[242][1] = -35;
Palletes[242][2] = -86;
Palletes[242][3] = -1;
Palletes[243] = new Uint8Array(4);
Palletes[243][0] = -1;
Palletes[243][1] = -16;
Palletes[243][2] = -76;
Palletes[243][3] = 42;
Palletes[244] = new Uint8Array(4);
Palletes[244][0] = -1;
Palletes[244][1] = -33;
Palletes[244][2] = 0;
Palletes[244][3] = -97;
Palletes[245] = new Uint8Array(4);
Palletes[245][0] = -1;
Palletes[245][1] = -29;
Palletes[245][2] = 23;
Palletes[245][3] = -77;
Palletes[246] = new Uint8Array(4);
Palletes[246][0] = -1;
Palletes[246][1] = -1;
Palletes[246][2] = -5;
Palletes[246][3] = -16;
Palletes[247] = new Uint8Array(4);
Palletes[247][0] = -1;
Palletes[247][1] = -96;
Palletes[247][2] = -96;
Palletes[247][3] = -92;
Palletes[248] = new Uint8Array(4);
Palletes[248][0] = -1;
Palletes[248][1] = -128;
Palletes[248][2] = -128;
Palletes[248][3] = -128;
Palletes[249] = new Uint8Array(4);
Palletes[249][0] = -1;
Palletes[249][1] = -1;
Palletes[249][2] = 0;
Palletes[249][3] = 0;
Palletes[250] = new Uint8Array(4);
Palletes[250][0] = -1;
Palletes[250][1] = 0;
Palletes[250][2] = -1;
Palletes[250][3] = 0;
Palletes[251] = new Uint8Array(4);
Palletes[251][0] = -1;
Palletes[251][1] = -1;
Palletes[251][2] = -1;
Palletes[251][3] = 0;
Palletes[252] = new Uint8Array(4);
Palletes[252][0] = -1;
Palletes[252][1] = 0;
Palletes[252][2] = 0;
Palletes[252][3] = -1;
Palletes[253] = new Uint8Array(4);
Palletes[253][0] = -1;
Palletes[253][1] = -1;
Palletes[253][2] = 0;
Palletes[253][3] = -1;
Palletes[254] = new Uint8Array(4);
Palletes[254][0] = -1;
Palletes[254][1] = 0;
Palletes[254][2] = -1;
Palletes[254][3] = -1;
Palletes[255] = new Uint8Array(4);
Palletes[255][0] = -1;
Palletes[255][1] = -1;
Palletes[255][2] = -1;
Palletes[255][3] = -1;
// 一些工具函数
// 将某个位宽进行4字节对齐
function widthBytes(bitCount) {
    return (bitCount + 31) / 32 * 4;
}
// 计算某个位图4字节对齐时每行填充的数据量
function skipBytes(bit, width) {
    return widthBytes(bit * width) - width * (bit / 8);
}
// 将WIL图片库中颜色位数转为字节数
function colorCountToBitCount(colorCount) {
    if (colorCount == 256) return 8;
    if (colorCount == 65536) return 16;
    if (colorCount == 16777216) return 24;
    return 32;
}

export { Palletes, widthBytes, skipBytes, colorCountToBitCount };