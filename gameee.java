import java.util.Scanner;
import java.util.Stack;

public class gameee {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Stack<String> stack = new Stack<>();

        System.out.println("Welcome to the Stack Game!");
        System.out.println("You can add blocks (PUSH) or remove the top block (POP).");
        System.out.println("The goal is to stack and unstack correctly.");
        System.out.println("Commands: PUSH <block name>, POP, or EXIT.");
        System.out.println("Example: PUSH RedBlock");

        while (true) {
            System.out.print("\nEnter command: ");
            String command = scanner.nextLine().trim();

            if (command.equalsIgnoreCase("EXIT")) {
                System.out.println("Exiting the game. Goodbye!");
                break;
            } else if (command.startsWith("PUSH ")) {
                String blockName = command.substring(5).trim();
                if (!blockName.isEmpty()) {
                    stack.push(blockName);
                    System.out.println("Added " + blockName + " to the stack.");
                } else {
                    System.out.println("Block name cannot be empty!");
                }
            } else if (command.equalsIgnoreCase("POP")) {
                if (!stack.isEmpty()) {
                    String removedBlock = stack.pop();
                    System.out.println("Removed " + removedBlock + " from the stack.");
                } else {
                    System.out.println("The stack is empty! Nothing to remove.");
                }
            } else if (command.equalsIgnoreCase("VIEW")) {
                System.out.println("Current stack: " + stack);
            } else {
                System.out.println("Invalid command! Use PUSH <block>, POP, VIEW, or EXIT.");
            }
        }

        scanner.close();
    }
}