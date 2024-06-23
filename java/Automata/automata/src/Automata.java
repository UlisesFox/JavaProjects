import java.util.Scanner;
import java.util.regex.*;

public class Automata {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("\nIngresa un texto: ");
        String input = scanner.nextLine();

        Pattern pattern = Pattern.compile("/\\*.*?\\*/");

        Matcher matcher = pattern.matcher(input);
        if (matcher.find()) {
            System.out.println("Aceptado\n");
        } else {
            System.out.println("No aceptada\n");
        }

        scanner.close();
    }
}
