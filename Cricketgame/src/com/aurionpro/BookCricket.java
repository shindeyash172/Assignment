package com.aurionpro;

import java.util.*;

public class BookCricket {

	

	public static void main(String[] args) {
		
		  System.out.println("Welcome to Book Cricket Game!!!");
		  System.out.println("Rules for the game: ");
		  System.out.println("**Assume a book of 300 pages"); System.out.
		  println("1. Player1 opens the book to read a page number(example 87)()Randomly Generated"
		  ); System.out.
		  println("2. If the page number is 87->(87%7) (%7 results in score between 0-6) = 3 should be added to the score"
		  ); System.out.
		  println("3. Player1 continues and keeps adding to the score until page number results in a 0 score"
		  ); System.out.
		  println("4. Player2 starts the game and tries to beat the score of player1");
		  System.out.
		  println("5. In case of a tie, check the number of turns(player with less number of turns winner)"
		  ); System.out.println("6. Show the winner of the game\n");
		 

		System.out.print("Enter 1 to start the game and 0 for exit : ");

		Scanner sc = new Scanner(System.in);
		int start = sc.nextInt();
		if (start == 1) {
			System.out.print("Enter Player 1 Name : ");
			String player1 = sc.next();

			System.out.print("Enter Player 2 Name : ");
			String player2 = sc.next();

			System.out.println("Player : " + player1);

			int point = 1, score1 = 0, turns = 1;
			while (point != 0) {
				System.out.print("Enter 1 to Open Book : ");
				int open = sc.nextInt();

				Random random = new Random();
				int number = random.nextInt(301);
				point = number % 7;
				if (point != 0) {
					turns += 1;
					score1 += point;
					System.out.println("Page Number : " + number + "\t Point : " + point + "\t Score : " + score1);
				} else {
					System.out.println("Page Number : " + number + "\t Point : " + point + "\t Score : " + score1);
					System.out.println( "\t\t OOPS \t\t " );
					System.out.println(player1 + " Total Score : " + score1);
					System.out.println(player1 + " Takes " + turns + " Rounds");
				}

			}

			System.out.println(player2 + " needs " + (score1 + 1) + " score in " + turns + " rounds to win match.\n");
			System.out.println("Player : " + player2);

			int score2 = 0;
			while (turns > 0) {
				point = 1;
				System.out.print("Enter 1 to Open Book : ");
				int open = sc.nextInt();

				Random random = new Random();
				int number = random.nextInt(301);
				point = number % 7;
				if (point != 0) {
					// turns += 1;
					score2 += point;
					System.out.println("Page Number : " + number + "\t Point : " + point + "\t Score : " + score2
							+ "\t Rounds Left : " + (turns - 1));
						
		
					if (score2 > score1) {
						System.out.println("\n"  + player2 + " Win Match !!!" );
						break;
					}
					if (turns == 0 && score2 < score1) {
						System.out.println("\n" + player1 + " Win Match !!!" );
					}
					if (turns == 0 && score2 == score1) {
						System.out.println("\n"  + " Match Ties !!!" );
						break;
					}
				turns--;
				} else {
					System.out.println("Page Number : " + number + "\t Point : " + point + "\t Score : " + score2
							+ "\t Rounds Left : " + (turns - 1));
					System.out.println( "!!!\t\t OOPS \t\t !!!" );
					System.out.println("\n" + player1 + " Win Match !!!" );
					break;
				}

			}

		}

	}

}



//---OUTPUT-----------
//Welcome to Book Cricket Game!!!
//Rules for the game: 
//**Assume a book of 300 pages
//1. Player1 opens the book to read a page number(example 87)()Randomly Generated
//2. If the page number is 87->(87%7) (%7 results in score between 0-6) = 3 should be added to the score
//3. Player1 continues and keeps adding to the score until page number results in a 0 score
//4. Player2 starts the game and tries to beat the score of player1
//5. In case of a tie, check the number of turns(player with less number of turns winner)
//6. Show the winner of the game
//
//Enter 1 to start the game and 0 for exit : 1
//Enter Player 1 Name : Yash 
//Enter Player 2 Name : Amit
//Player : Yash
//Enter 1 to Open Book : 1
//Page Number : 273	 Point : 0	 Score : 0
//		 OOPS 		 
//Yash Total Score : 0
//Yash Takes 1 Rounds
//Amit needs 1 score in 1 rounds to win match.
//
//Player : Amit
//Enter 1 to Open Book : 1
//Page Number : 26	 Point : 5	 Score : 5	 Rounds Left : 0
//
//Amit Win Match !!!
