package testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class test {

    public static void main(String[] args) {

        WebDriver driver = null;
        try {
	        System.setProperty("webdriver.chrome.driver", "C:\\Users\\bbdnet2741\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");
	        driver = new ChromeDriver();
	        driver.get("https://m6p8pjdqm3.eu-west-1.awsapprunner.com");
	        driver.manage().window().maximize();

	        // Helper method for clicking buttons
	        clickButton(driver, "1");
	        clickButton(driver, "2");
	        clickButton(driver, "3");
	        clickButton(driver, "4");
	        clickButton(driver, "5");
	        clickButton(driver, "6");
	        clickButton(driver, "7");
	        clickButton(driver, "8");
	        clickButton(driver, "9");
	        clickButton(driver, "0");
	        clickButton(driver, "00");
	        clickButton(driver, ".");
	        clickButton(driver, "DE");

	        // Get input value
	        String inputValue = getInputValue(driver);

	        if (inputValue.equals("123456789000")) {
	        	clickButton(driver, "AC");
	            clickButton(driver, "1");
	            clickButton(driver, "+");
	            clickButton(driver, "2");
	            clickButton(driver, "=");
	            String result = getInputValue(driver);

	            if (result.equals("3")) {
	                clickButton(driver, "×");
	                clickButton(driver, "6");
	                clickButton(driver, "=");
	                result = getInputValue(driver);

	                if (result.equals("18")) {
	                    clickButton(driver, "-");
	                    clickButton(driver, "8");
	                    clickButton(driver, "=");
	                    result = getInputValue(driver);

	                    if (result.equals("10")) {
	                        clickButton(driver, "÷");
	                        clickButton(driver, "0");
	                        clickButton(driver, ".");
	                        clickButton(driver, "5");
	                        clickButton(driver, "=");
	                        result = getInputValue(driver);

	                        if (result.equals("20")) {
	                            System.out.println("Test completed successfully!!");
	                        } else {
	                            System.out.println("Division failed!!");
	                        }

	                    } else {
	                        System.out.println("Subtraction failed!!");
	                    }

	                } else {
	                    System.out.println("Multiplication failed!!");
	                }

	            } else {
	                System.out.println("Addition failed!!");
	            }

	        } else {
	            System.out.println("Unable to display input");
	        }
        
        } catch (Exception e) {
 
            System.err.println("An exception occurred: " + e.getMessage());
        } finally {

            if (driver != null) {
                driver.quit();
            }
        }

    }

    private static void clickButton(WebDriver driver, String buttonId) {
 
    	try {
            WebElement button = driver.findElement(By.id(buttonId));
            button.click();
 
        } catch (Exception e) {

            System.err.println("Failed to click button with ID " + buttonId + ": " + e.getMessage());
        }
    }

    private static String getInputValue(WebDriver driver) {

    	try {
            WebElement inputField = driver.findElement(By.id("displayArea"));
            return inputField.getAttribute("value");

        } catch (Exception e) {

            System.err.println("Failed to get input value: " + e.getMessage());
            return null;
        }
    }

}
