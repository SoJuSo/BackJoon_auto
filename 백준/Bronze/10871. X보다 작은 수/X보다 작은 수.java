import java.util.Scanner;

public class Main {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int index = sc.nextInt();
        int[] numbers = new int[n];

        // System.out.println(n);
        // System.out.println(index);

        for (int i = 0; i < n; i++) {
            numbers[i] = sc.nextInt();
        }

        // System.out.println(numbers);

        for (int i = 0; i < n; i++) {
            if (numbers[i] < index) {
                System.out.print(numbers[i] + " ");
            }
        }

        sc.close();
    }
}
