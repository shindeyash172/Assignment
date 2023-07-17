package com.aurionpro.test;
import java.util.Scanner;

public class WaterBill {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Units Consumed:");
		
		int unitsConsumed = sc.nextInt();
		int meterCharge = 75;
		int charge;
		
		if(unitsConsumed<=100) {
			charge = unitsConsumed * 5;
		} else {
			if(unitsConsumed <= 250) {
				charge = unitsConsumed * 10;
			} else {
				charge = unitsConsumed * 20;
			}
		}
		
		int waterBill = charge + meterCharge;
		System.out.println("Total Water Bill is: " + waterBill);

	}


}