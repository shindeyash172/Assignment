package com.aurionpro.test;

import java.util.*;

public class ArrayStatistics {

	public static void main(String[] args) {
		int[] arr = new int[args.length];
		int sum = 0;
		double average, median;
		System.out.print("Elements of an array: ");
		for (int i = 0; i < args.length; i++) {
			arr[i] = Integer.parseInt(args[i]);
			System.out.print(arr[i] + " ");
			sum += arr[i];
		}
		System.out.println("\nSum: " + sum);
		double n = args.length;
		average = sum / n;
		System.out.format("Average: %.2f\n", average);

		Arrays.sort(arr);
		System.out.println("Minimum: " + arr[0]);
		System.out.println("Maximum: " + arr[args.length - 1]);

		if (args.length % 2 == 0) {
			median = (arr[(args.length / 2) - 1] + arr[(args.length / 2)]) / 2.0;
		} 
		else {
			median = arr[(args.length / 2)];
		}
		System.out.format("Median: %.2f \n\n", median);
		System.out.println("Frequency of elements of array");
		for (int i = 0; i < arr.length; i++) {
			int count = 1;
			while (i < arr.length - 1 && arr[i] == arr[i + 1]) {
				i++;
				count++;
			}

			System.out.println(arr[i] + " occurs " + count + " times.");
		}

	}

}