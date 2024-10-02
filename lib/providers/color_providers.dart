



import 'dart:math';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'color_providers.g.dart';

@riverpod
Color randomColor(RandomColorRef ref) {
  return Color(Random().nextInt(0xffffffff)) ;

}