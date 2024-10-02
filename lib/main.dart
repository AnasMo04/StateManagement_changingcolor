import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:state/providers/color_providers.dart';

void main() {
  runApp(
    const ProviderScope(child: MyApp()
    ),
  );
}

class MyApp extends ConsumerWidget {
  const MyApp({super.key});


  @override
  Widget build(BuildContext context,WidgetRef ref) {
    final myColor=ref.watch(randomColorProvider);
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(

        colorScheme: ColorScheme.fromSeed(seedColor: myColor),
        useMaterial3: true,
      ),
      home: MyHomePage(title: 'Random Color ^_^'),
    );
  }
}

class MyHomePage extends ConsumerStatefulWidget {
  const MyHomePage({super.key, required this.title});



  final String title;

  @override
  ConsumerState<MyHomePage> createState() => _MyHomePageState();  ///state->consumerstate
}

class _MyHomePageState extends ConsumerState<MyHomePage> { ///state->consumerstate


  @override
  Widget build(BuildContext context) {
var myColor =ref.watch(randomColorProvider);
    return Scaffold(
      appBar: AppBar(
centerTitle: true,
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,

        title: Text(widget.title),
      ),
      body: Center(
        child: Container(
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(20),color: myColor),
          height: 200,
          width:200 ,
          // color: myColor,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          ref.invalidate(randomColorProvider);
        },

        child: const Icon(Icons.add),
      ),
    );
  }
}
